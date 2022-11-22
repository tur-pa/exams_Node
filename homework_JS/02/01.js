let myArray = [1, 6, 23, 8, 4, 8, 3, 7];

//b.	Create a function that takes in an array of numbers and returns sum of all elements
function summary(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(`Sum of array = ${summary(myArray)}`);

//c.	Create a function that takes in an array of numbers and returns sum of first and last element
function addSummary(array) {
  return array[0] + array[array.length - 1];
}
console.log(`Sum of first and last element ${addSummary(myArray)}`);

//d.	Create a function that takes in an array and returns its copy in reverse order
function reverse(array) {
  let revArray = [];
  for (let i = 0; i < array.length; i++) {
    revArray[i] = array[array.length - i - 1];
  }
  return revArray;
}
console.log(`Reverse array is ${reverse(myArray)}`);

//e.	Create a function that takes two parameters - array of numbers, and number of attempts.
// Choose random numbers from the array based on the number of attempts and return the lowest among them.
function randomNumber(array, attemptNum) {
  let lowestNumber = 99;
  for (let i = 0; i < attemptNum; i++) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (array[randomNumber] < lowestNumber) {
      lowestNumber = array[randomNumber];
    }
    console.log(
      `Random number is ${randomNumber} so lottery number of array is ${array[randomNumber]}`
    );
  }
  return lowestNumber;
}
console.log(`The lowest number is ${randomNumber(myArray, 2)}`);

//f.	Create a function that takes in an array and returns it in random order
function randomArray(array) {
  let lotteryArray = [];
  let n = array.length;
  for (let i = 0; i < n; i++) {
    // console.log(array); //sprawdzenie co zostało w tablicy
    let randomNumber = Math.floor(Math.random() * (n - i));
    // console.log(randomNumber); //wylosowany numer
    lotteryArray[i] = array[randomNumber]; //losuje z tablicy oryginalnej
    array.splice(randomNumber, 1);
  }
  return lotteryArray;
}
console.log(`Lottery array is ${randomArray(myArray)}`);

//g.	Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
myArray = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
function sumOdd(array) {
  let sum = 0;
  array.forEach((element) => {
    if (element % 2 !== 0) {
      sum = sum + element;
    }
  });
  return sum;
}
console.log(`Sum of odd elements is ${sumOdd(myArray)}`);

//h.	With  a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]
function subtract(array) {
  let sumEven = 0;
  let sumOdd = 0;
  array.forEach((element) => {
    if (element % 2 === 0) {
      sumEven = sumEven + element;
    } else {
      sumOdd = sumOdd + element;
    }
  });
  return console.log(
    `Sum of even is ${sumEven} and sum of odd is ${sumOdd}. Substract is ${
      sumEven - sumOdd
    }`
  );
}
subtract(myArray);
