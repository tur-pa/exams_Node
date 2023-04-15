const User = require("./../models/userModel");

checkUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ author: req.body.author });
    if (user) {
      next();
    } else {
      console.error("There is no such a registered user :(");
      res.status(401).json({
        status: "Unauthorized",
        message: "There is no such a registered user :(",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};

module.exports = checkUser;
