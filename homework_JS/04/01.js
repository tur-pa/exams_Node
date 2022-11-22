let lotteryNumber;

function lotteryPromise() {
  lotteryNumber = Math.floor(Math.random() * 2);
  const lotteryPromise = new Promise((resolve, reject) => {
    if (lotteryNumber === 1) {
      resolve(`Now I work`);
    }
    reject(`Now I don’t`);
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  return lotteryPromise;
}

lotteryPromise();
