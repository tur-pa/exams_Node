const argv = require("yargs").argv;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//TODO
dotenv.config({ path: "./.env" });
const app = require("./app");
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const port = argv.port;
const logData = require("./utils/logdata");

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB connection success!`);
  })
  .catch((err) => console.error(err));

if (process.argv[3] === "debug") {
  logData.runSaveToFile();
}

if (!port) {
  console.log(`Enter port --port=PORTnumber`);
  process.exit(0);
} else {
  app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
  });
}
