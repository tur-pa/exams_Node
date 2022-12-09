const colors = require(`colors`);
const text = process.argv[2];

if (process.argv.length > 3) {
  console.log(`Text should be given in one parameter.`);
} else if (text) {
  console.log(colors.rainbow(text));
} else {
  console.log(`You haven't written a text.`);
}

//CALL FORMULA: node 02.js yourstext
