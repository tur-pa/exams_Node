const fs = require(`fs`);
const destination = process.argv[2];

if (process.argv.length > 3) {
  console.log(`Za dużo parametrów`);
} else if (!destination) {
  console.log(`Zbyt mało parametrów`);
} else {
  let result = fs.readdirSync(`${destination}`);
  console.log(result);
}
