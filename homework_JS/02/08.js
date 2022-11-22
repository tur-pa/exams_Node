//8.	Implement merge sort
myArray = [1, 5, 10, 12, 6, 9];

function merge(leftArray, rightArray) {
  let array = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      array.push(leftArray.shift()); // dodajemy do tablicy array zabrany element z leftArray
    } else {
      array.push(rightArray.shift());
    }
  }
  console.log([...array, ...leftArray, ...rightArray]);
  return [...array, ...leftArray, ...rightArray]; //dodawanie tablic
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let leftArray = array.splice(0, array.length / 2);
  console.log(`Division of left array ${leftArray}`);
  let rightArray = array;
  console.log(`Division of right array ${rightArray} \n`);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort(myArray));
