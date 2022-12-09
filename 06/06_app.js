const yargs = require(`yargs`);
const add = require(`./06_add`);
const show = require(`./06_show`);

yargs
  .command({
    command: "add",
    describe: "Add task to the list.",
    builder: {
      task: {
        describe: "Name task to do",
        type: "string",
        demandOption: true,
      },
    },
    handler: function (argv) {
      add.newTask(argv.task);
    },
  })
  .command({
    command: "list",
    describe: "Show tasks to do.",
    handler: function (argv) {
      show.showTasks(argv);
    },
  })
  .demandCommand().argv;
