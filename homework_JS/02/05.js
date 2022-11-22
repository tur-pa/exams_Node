//a.	Checks if a given number is a prime number
checkNumber = 2;

function primeNumber(checkNumber) {
  // if (checkNumber === 0 || checkNumber === 1) {
  //   return console.log(`${checkNumber} is complex number`);
  // }

  for (let i = 2; i <= Math.ceil(Math.sqrt(checkNumber)); i++) {
    if (checkNumber % i === 0 && checkNumber !== 2) {
      return false;
    } else {
      return true;
    }
  }
}

if (primeNumber(checkNumber)) {
  console.log(`${checkNumber} is prime number`);
} else {
  console.log(`${checkNumber} is not prime number`);
}

//b.	takes in n (numbers) as a parameter and returns first n prime numbers
let n = 8;

function primeNumbers(n) {
  let number = 2;
  let primeNumbers = [];
  let i = 0;
  while (i <= n) {
    if (primeNumber(number)) {
      i++;
      primeNumbers.push(number);
    }
    number++;
  }
  return primeNumbers;
}
console.log(`${n} prime numbers: ${primeNumbers(n)}`);
