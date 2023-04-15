const fs = require("fs");
const logData = (function iife(req, res, next) {
  let saveToFile = false;
  return {
    runSaveToFile() {
      saveToFile = true;
    },
    saveData(req, res, next) {
      if (saveToFile) {
        const time = new Date().toString();
        const method = req.method;
        const url = req.url;
        // console.log(`Time: ${time}. Method: ${method}. Url: ${url}`); // TEST
        const log = `Request method: ${method}. Request url: ${url}. Request time: ${time} \n`;
        fs.appendFile("logfile.txt", log, (error) => {
          if (error) console.log(error);
        });
      }
      next();
    },
  };
})();

module.exports = logData;
