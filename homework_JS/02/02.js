//2.	Create a function that returns number of days till Friday

function friday() {
  let today = new Date();
  if (today.getDay() <= 5) {
    return 5 - today.getDay();
  } else {
    return 6;
  }
}
console.log(`Till Friday left ${friday()}`);
