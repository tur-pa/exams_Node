const fs = require("fs");
const file = process.argv[1];

fs.stat(file, function (error, stats) {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log(`File Size: ${stats.size} bytes.`);
    console.log(`File Data Creacted: ${stats.birthtime}.`);
    console.log(`File Data Last Modified: ${stats.mtime}.`);
  }
});
