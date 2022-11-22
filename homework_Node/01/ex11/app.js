const math = require("./math.js");
const fs = require("fs");

const nameA = process.argv[2];
const nameB = process.argv[3];

if (process.argv.length > 4) {
  console.log(`Za dużo parametrów`);
} else if (!nameA || !nameB) {
  console.log(`Zbyt mało parametrów`);
} else {
  let a = Number(fs.readFileSync(`./${nameA}`));
  let b = Number(fs.readFileSync(`./${nameB}`));

  let result = `Wynik ${a} + ${b} = ${math.sum(a, b)}
Wynik ${a} - ${b} = ${math.sub(a, b)}
Wynik ${a} * ${b} = ${math.mul(a, b)}
Wynik ${a} / ${b} = ${math.div(a, b)}`;

  fs.writeFileSync("./wynik.txt", result);

  console.log(result);
}
