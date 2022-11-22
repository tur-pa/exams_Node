let text = "This is an example.";
let textCount = text;
let textIndex;
let searchIndex = 0;
let wordCounter = 0;
let letterCounter = 0;
let longestWord = "";
let sameLength = 0;

//A & B & C
while (textIndex !== -1) {
  textIndex = textCount.indexOf(" ", searchIndex);
  tempWord = textCount.slice(0, textCount.indexOf(" ", searchIndex));

  for (let i = 0; i < tempWord.length; i++) {
    if (tempWord[i] === "a") {
      letterCounter++;
    }
  }

  textCount = textCount.slice(textCount.indexOf(" ", searchIndex) + 1);
  wordCounter++;
  console.log(tempWord);

  if (longestWord.length < tempWord.length) {
    longestWord = tempWord;
  }
}
//D
textCount = text;
for (let i = 0; i < wordCounter; i++) {
  tempWord = textCount.slice(0, textCount.indexOf(" ", searchIndex));
  textCount = textCount.slice(textCount.indexOf(" ", searchIndex) + 1);
  if (longestWord.length === tempWord.length) {
    sameLength++;
  }
}

console.log(`Litera A wyświetliła się: ${letterCounter} razy`);
console.log(`Liczba wyrazów to: ${wordCounter}`);
console.log(`Najdłuższy wyraz to: ${longestWord}`);
console.log(`Słów o długości jak ma: ${longestWord} jest ${sameLength}`);

//Sprawdzenie commita
