let numberCard = "375987654321001";
let sum = 0;
let doubleNumber;

// PART 1
for (let i = 0; i < numberCard.length; i++) {
  if (i % 2 == 0) {
    if (numberCard[i] * 2 > 9) {
      doubleNumber = String(numberCard[i] * 2); //trzeba zamienić na stringa bo inaczej nie dostane się do poszczególnych liczb
      // helper = Number(doubleNumber[0]) + Number(doubleNumber[1]); //trzeba zamienic na cyfre bo inaczej bedzie stawiac koło siebie zamiast dodać
      sum = Number(doubleNumber[0]) + Number(doubleNumber[1]);
    } else {
      sum = sum + numberCard[i] * 2;
    }

    console.log(`Przemnożona liczba przez 2: ${numberCard[i] * 2}`);
  } else {
    sum = sum + numberCard[i] * 1;

    console.log(`Przemnożona liczba przez 1: ${numberCard[i] * 1}`);
  }
}

if (sum % 2 === 0) {
  console.log(`Numer karty ${numberCard} jest prawidłowy`);
} else {
  console.log(`Numer karty ${numberCard} jest nieprawidłowy`);
}

// PART 2
//American Express
if (
  (numberCard.slice(0, 2) === "34" || numberCard.slice(0, 2) === "37") &&
  numberCard.length === 15
) {
  console.log(`Numer karty ${numberCard} jest z All American Express`);
}
//MasterCard
if (
  (numberCard.slice(0, 2) === "51" ||
    numberCard.slice(0, 2) === "52" ||
    numberCard.slice(0, 2) === "53" ||
    numberCard.slice(0, 2) === "54" ||
    numberCard.slice(0, 2) === "55") &&
  numberCard.length === 16
) {
  console.log(`Numer karty ${numberCard} jest z MasterCard`);
}
//Visa
if (
  numberCard.slice(0, 1) === "4" &&
  (numberCard.length === 13 || numberCard.length === 16)
) {
  console.log(`Numer karty ${numberCard} jest z Visa`);
}
