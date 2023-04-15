const express = require("express");
const boardRouter = require("./routes/boardRoute");
const userRouter = require("./routes/userRoute");
const heartbeatRouter = require("./routes/heartbeatRoute");
const app = express();

app.use(express.json());

// ROUTE IN CASE NO USERS IN DB, THIS ROUTE ALLOWS YOU TO CREATE NEW ONES
app.use("/api/users", userRouter);

// MAIN ROUTE TO API
app.use("/api", heartbeatRouter, boardRouter);

// 404 NOT FOUND
app.use("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/images/404.jpg");
});

module.exports = app;
