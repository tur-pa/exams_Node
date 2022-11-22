const math = require("./math.js");
const fs = require("fs");
let a = Number(fs.readFileSync("./ex8/a.txt"));
let b = Number(fs.readFileSync("./ex8/b.txt"));

let result = `Wynik ${a} + ${b} = ${math.sum(a, b)}
Wynik ${a} - ${b} = ${math.sub(a, b)}
Wynik ${a} * ${b} = ${math.mul(a, b)}
Wynik ${a} / ${b} = ${math.div(a, b)}`;

fs.writeFileSync("./ex8/wynik.txt", result);

console.log(result);
