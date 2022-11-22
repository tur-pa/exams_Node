const utils = require(`./utils.js`);
const _ = require("lodash");
const yargs = require("yargs").argv;

const someArray = ["ala", 3, "ma", "kota", 2, "ala", 5, 3];

const funcResult = utils.uniq(someArray);

console.log(funcResult);

const tabA = ["ala", "ma", "kota"];
const tabB = ["ala", "ma", "psa"];

console.log(utils.diff(tabA, tabB));
console.log(utils.diff(tabB, tabA));

//Useage of lodash

console.log(`Lodash: ${_.uniq(someArray)}`);

console.log(`Lodash: ${_.difference(tabA, tabB)}`);
console.log(`Lodash: ${_.difference(tabB, tabA)}`);

const newArray = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];
console.log(`Lodash: ${_.min(newArray)}`);
console.log(`Lodash: ${_.max(newArray)}`);

// Check for arguments
if (yargs.a && yargs.b && yargs.operator) {
  let a = yargs.a;
  let b = yargs.b;
  let operator = yargs.operator;

  if (operator === "+") {
    console.log(a + b);
  }
}
