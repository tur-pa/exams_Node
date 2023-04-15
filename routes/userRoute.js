const express = require("express");
const userController = require("./../controllers/userController");
const error404Handler = require("./../utils/catch404");
const router = express.Router();

router
  .route("/delete/:author")
  .delete(
    userController.getAuthorization,
    userController.deleteUser,
    error404Handler
  ),
  router
    .route("/")
    .get(userController.showUsers)
    .post(userController.createUser);

module.exports = router;
