const fs = require("fs");
let dnaNumber = fs
  .readFileSync("C:/Podyplomowe/hw_JS/01/brca1.json")
  .toString();
// let dnaNumber = "vvatgvvveeetaabbbatgccctag";
let startIndex = 0;
let endIndex = 0;
let dnaCandidate;
let dnaTemp = "";
let dnaLength = 0;

// dnaNumber = dnaNumber.slice(1, dnaNumber.length - 3);

while (dnaNumber.indexOf("atg", startIndex) !== -1) {
  startIndex = dnaNumber.indexOf("atg", startIndex);

  if (dnaNumber.indexOf("taa", endIndex) != -1) {
    endIndex = dnaNumber.indexOf("taa", endIndex);
  } else if (dnaNumber.indexOf("tag", endIndex) != -1) {
    endIndex = dnaNumber.indexOf("tag", endIndex);
  } else if (dnaNumber.indexOf("tga", endIndex) != -1) {
    endIndex = dnaNumber.indexOf("tga", endIndex);
  }

  dnaCandidate = dnaNumber.slice(startIndex, endIndex + 3);
  startIndex++;
  endIndex++;

  if (dnaCandidate.length % 3 === 0 && dnaCandidate.length !== 0) {
    console.log(dnaCandidate);
    console.log(`Długość genu: ${dnaCandidate.length}
    `);
    if (dnaCandidate.length > dnaTemp.length) {
      dnaTemp = dnaCandidate;
      dnaLength = dnaTemp.length;
    }
  }
}

console.log(`Najdłuższy gen to: ${dnaTemp} o długości ${dnaLength}`);
