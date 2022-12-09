const fs = require("fs");

function showTasks(argv) {
  try {
    fs.access(`./taskdata.json`, (err) => {
      if (err) {
        console.log(
          `There is now tasks! You can go sleep and watch Netflix :)`
        );
      } else {
        fs.readFile(`./taskdata.json`, (error, data) => {
          if (error) console.log(`Something goes wrong with read a file!`);
          data = JSON.parse(data);
          data.map((curr) => console.log(`Task to do: ${curr.task}`));
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  showTasks: showTasks,
};
