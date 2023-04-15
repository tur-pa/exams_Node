const User = require("./../models/userModel.js");

exports.getAuthorization = async (req, res, next) => {
  try {
    const author = await req.headers.author;
    const password = await req.headers.password;
    const filteredAuthor = await User.findOne({ author: author });
    if (!author || !password) {
      console.error("Error: provide author and password in header!");
      res.status(400).json({
        status: "Bad Request",
        message: "Error: provide author and password in header!",
      });
    } else {
      if (filteredAuthor.password === password) {
        next();
      } else {
        console.error("You hit the wrong password!");
        res.status(401).json({
          status: "Unauthorized",
          message: "You hit the wrong password!",
        });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};

exports.showUsers = async (req, res) => {
  try {
    const showUsers = await User.find().select({ author: 1, _id: 0 });
    res.status(200).json({
      status: "Success",
      lengthOfCollection: showUsers.length,
      data: {
        createdUser: showUsers,
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

exports.createUser = async (req, res) => {
  try {
    if ((await User.count()) < 3) {
      const newUser = await User.create(req.body);
      res.status(201).json({
        status: "Created",
        data: {
          user: newUser.author,
        },
      });
    } else {
      console.error("Too much users. Limit is 3 users in DB.");
      res.status(403).json({
        status: "Forbidden",
        message: "Too much users. Limit is 3 users in DB.",
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

exports.deleteUser = async (req, res, next) => {
  try {
    const deletedAdvert = await User.findOneAndDelete({
      author: req.params.author,
    });
    res.status(200).json({
      status: "Success",
      data: {
        deletedUser: deletedAdvert.author,
      },
    });
  } catch (err) {
    console.error(err);
    next(err);
    // res.status(400).json({
    //   status: "Bad Request",
    //   message: err.message,
    // });
  }
};
