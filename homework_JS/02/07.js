//7.	Implement selection sort

myArray = [20, 12, 10, 15, 2];

function selectionSort(array) {
  let minIndex;
  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
console.log(`Sorted array is ${selectionSort(myArray)}`);
