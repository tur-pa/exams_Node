const Advert = require("./../models/boardModel.js");

exports.getAllAdverts = async (req, res) => {
  try {
    const showAdverts = await Advert.find();
    res.status(200).json({
      status: "Success",
      lengthOfCollection: showAdverts.length,
      data: {
        advert: showAdverts,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};

exports.getAdvertById = async (req, res, next) => {
  try {
    const showAdvertById = await Advert.findById(req.params.id);
    if (!showAdvertById) {
      console.error("There is no such an advert.");
      return next();
    }
    res.locals.data = showAdvertById;
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.createAdvert = async (req, res) => {
  try {
    const newAdvert = await Advert.create(req.body);
    res.status(201).json({
      status: "Created",
      data: {
        newAdvert: newAdvert,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};

exports.deleteAdvert = async (req, res, next) => {
  try {
    const queryObj = { ...req.query };
    const [searchKey] = Object.keys(queryObj);
    const [searchValue] = Object.values(queryObj);
    if (searchKey === "_id" || searchKey === "title") {
      const deletedAdvert = await Advert.findOneAndDelete()
        .where(searchKey)
        .equals(searchValue);
      // .where(searchKey)
      // .equals(new RegExp(searchValue, "gi"));
      if (!deletedAdvert) {
        console.error("There is no such an advert :(");
        return next();
      }
      res.status(200).json({
        status: "Success",
        dataDeleted: deletedAdvert,
      });
    } else {
      console.error("You can delete advert only by title or _id.");
      res.status(400).json({
        status: "Bad Request",
        data: "You can delete advert only by title or _id.",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};

exports.updateAdvert = async (req, res, next) => {
  try {
    let updatedAdvert;
    const queryObj = { ...req.query };
    const [searchKey] = Object.keys(queryObj);
    const [searchValue] = Object.values(queryObj);

    // FIND ADVERT
    if (searchKey === "_id" || searchKey === "title") {
      const findAdvert = await Advert.findOne()
        .where(searchKey)
        .equals(searchValue);
      // new RegExp(searchValue, "gi"); --> IN CASE FINDING BY SOME LETTERS
      // CHECK IF IN DB IS ADVERT
      console.log(findAdvert);
      if (!findAdvert) {
        console.error("There is no such an advert to update :(");
        return next();
      }

      // CHECK IF USERS ARE THE SAME
      if (findAdvert.author === req.headers.author) {
        // Object.keys(queryObj).forEach((key) => {
        //   queryObj[key] = new RegExp(queryObj[key], "gi");
        // }); --> IN CASE FINDING BY SOME LETTERS
        updatedAdvert = await Advert.findOneAndUpdate(queryObj, req.body, {
          new: true, // DISPLAY MODIFIED AD
          runValidators: true,
        });
      } else {
        console.error("You are not allow to modify this advert.");
        return res.status(401).json({
          status: "Unauthorized",
          data: "You are not allow to modify this advert.",
        });
      }
    } else {
      console.error("You can update advert only by title or _id.");
      return res.status(400).json({
        status: "Bad Request",
        data: "You can update advert only by title or _id.",
      });
    }

    res.status(200).json({
      status: "Success",
      updatedAdvert: updatedAdvert,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};

exports.filterAdvert = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    let filteredAdverts;

    if (req.query.tags) {
      const query = req.query.tags.split(",");
      filteredAdverts = await Advert.find({
        tags: { $all: query.map((value) => new RegExp(value, "gi")) },
      });
    } else {
      let queryString = JSON.stringify(queryObj);
      queryString = queryString.replace(
        /\b(gte|gt|lte|lt)\b/g,
        (match) => `$${match}`
      );
      queryString = JSON.parse(queryString);

      const [searchKey] = Object.keys(queryString);
      let [searchValue] = Object.values(queryString);

      // PROBLEM WITH REGEX AND NUMBERS
      if (
        searchKey !== "cost" &&
        searchKey !== "createdAt" &&
        searchKey !== "phoneNumber"
      ) {
        searchValue = new RegExp(searchValue, "gi");
      }
      //

      filteredAdverts = await Advert.find()
        .where(searchKey)
        .equals(searchValue);
    }
    res.status(200).json({
      lengthOfCollection: filteredAdverts.length,
      status: "Success",
      data: filteredAdverts,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};
