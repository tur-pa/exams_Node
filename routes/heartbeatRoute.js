const express = require("express");
const heartbeat = require("./../controllers/heartbeatController");
const logData = require("./../utils/logdata");

const router = express.Router();

router.route("/heartbeat").get(logData.saveData, heartbeat.getHeartbeat);

module.exports = router;
