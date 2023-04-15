const express = require("express");
const boardController = require("./../controllers/boardController");
const userController = require("./../controllers/userController");
const logData = require("./../utils/logdata");
const error404Handler = require("./../utils/catch404");
const checkUser = require("./../utils/checkUser");
const formatMiddleware = require("../utils/formatData");

const router = express.Router();

router
  .route("/")
  .get(logData.saveData, boardController.getAllAdverts, error404Handler)
  .post(logData.saveData, checkUser, boardController.createAdvert)
  .patch(
    logData.saveData,
    userController.getAuthorization,
    boardController.updateAdvert,
    error404Handler
  )
  .delete(
    logData.saveData,
    userController.getAuthorization,
    boardController.deleteAdvert,
    error404Handler
  );

router.route("/search").get(logData.saveData, boardController.filterAdvert);

router
  .route("/:id")
  .get(
    logData.saveData,
    boardController.getAdvertById,
    formatMiddleware,
    error404Handler
  );

module.exports = router;
