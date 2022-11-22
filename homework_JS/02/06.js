//6.	Implement binary search

let myArray = [3, 4, 5, 6, 7, 8, 9];
let search = 3;

function binarySearch(array, search) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let midIndex;
  while (startIndex <= endIndex) {
    midIndex = Math.floor((endIndex + startIndex) / 2);
    if (search === array[midIndex]) {
      return midIndex;
    }
    if (search > array[midIndex]) {
      startIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }
  }
}

console.log(`Number ${search} has index ${binarySearch(myArray, search)}`);
