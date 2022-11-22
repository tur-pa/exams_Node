const fs = require("fs");
const yargs = require("yargs");
const args = yargs.argv;

const name = args.name;
const lastName = args.lastName;

const user = {
  name: name,
  lastName: lastName,
};

fs.writeFileSync("08_user.json", JSON.stringify(user));
