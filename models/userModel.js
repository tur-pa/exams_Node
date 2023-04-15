const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  author: {
    type: String,
    unique: true,
    required: [true, "User should has a name ;)"],
  },
  password: {
    type: String,
    minlength: 4,
    required: [true, "User should has a password!"],
  },
});

const User = mongoose.model("User", userSchema, "users");
module.exports = User;
