const fs = require("fs");
const yargs = require("yargs");
const args = yargs.argv;

let name = args.name;
let lastName = args.lastName;

let user = {
  name: name,
  lastName: lastName,
};

user = JSON.parse(fs.readFileSync("07_user.json"));

if (args.name) {
  user.name = args.name;
} else {
  user.lastName = args.lastName;
}

fs.writeFileSync("09_user.json", JSON.stringify(user));
