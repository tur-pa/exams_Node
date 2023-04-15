const path = require("path");
error404Handler = (err, req, res, next) => {
  res.status(404);
  res.sendFile(path.resolve(__dirname + "/../images/404.jpg"));
  console.log(`Error: ${err}`);
};

module.exports = error404Handler;
