let height = 8;
let result = "";

for (let lineNumber = 1; lineNumber <= height; lineNumber++) {
  //Spacje
  for (let i = lineNumber; i < height; i++) {
    result = result + " ";
  }
  //#
  for (let j = 1; j <= lineNumber; j++) {
    result = result + "#";
  }
  //Spacja
  result = result + " ";
  //#
  for (let k = 1; k <= lineNumber; k++) {
    result = result + "#";
  }
  result = result + "\n";
}

console.log(result);
