//4.	Create a function that takes in a n (number) as a parameter and returns first n Fibonacci numbers - use recursion
let n = 7;

function fibo(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibo(n - 2) + fibo(n - 1);
}

console.log(`Sum = ${fibo(n)}`);
