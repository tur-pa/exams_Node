const fs = require("fs");

function newTask(task) {
  try {
    fs.access(`./taskdata.json`, (err) => {
      if (err) {
        fs.writeFile(
          `./taskdata.json`,
          JSON.stringify([{ id: 1, task: task }]),
          (error) => {
            if (error) console.log(`Something goes wrong with write a file!`);
            console.log(`File has been created. First task has been added!`);
          }
        );
      } else {
        fs.readFile(`./taskdata.json`, (error, data) => {
          if (error) console.log(`Something goes wrong with read a file!`);
          const listData = JSON.parse(data);
          //*ID ADDED*\\
          let id;
          id = listData.reduce((acc, curr) => acc + curr.id, 1);
          //*\\
          if (!listData.find((curr) => curr.task === task)) {
            listData.push({
              id: id,
              task: task,
            });
            console.log(`Task added. Good luck!`);
          } else console.log(`You have this task on the list.`);

          fs.writeFile(`./taskdata.json`, JSON.stringify(listData), (error) => {
            if (error) console.log(`Something goes wrong with write a file!`);
            console.log(`File saved!`);
          });
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  newTask: newTask,
};
