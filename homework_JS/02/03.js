//a.	First that takes in a string and shift number, and returns encrypted string using Caesar Cipher

let sentence = "MĘŻNY BĄDŹ, CHROŃ PUŁK TWÓJ I SZEŚĆ FLAG";
let key = 3;

function encription(sentence, key) {
  let alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ";
  let secretWord = [];
  let index;
  for (let i = 0; i < sentence.length; i++) {
    index = alphabet.indexOf(sentence[i]);
    if (index === -1) {
      secretWord[i] = sentence[i]; //spacje
      // console.log(secretWord[i]);
      // console.log(alphabet.indexOf(sentence[i]));
    } else if (index + key < 32) {
      //alfabet ma 32 znaki
      secretWord[i] = alphabet[index + key];
      // console.log(secretWord[i]);
      // console.log(alphabet.indexOf(sentence[i]));
    } else {
      secretWord[i] = alphabet[index + key - 32];
      // console.log(secretWord[i]);
      // console.log(alphabet.indexOf(sentence[i]));
    }
  }
  return secretWord;
}
console.log(...encription(sentence, key));

//b.	Second that takes in encrypted string and shift number, and returns decrypted message using Caesar Cipher
function decription(sentence, key) {
  let alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ";
  let secretWord = [];
  let index;
  for (let i = 0; i < sentence.length; i++) {
    index = alphabet.indexOf(sentence[i]);
    if (index === -1) {
      secretWord[i] = sentence[i];
      // console.log(secretWord[i]);
      // console.log(alphabet.indexOf(sentence[i]));
    } else if (index - key >= 0) {
      secretWord[i] = alphabet[index - key];
      // console.log(secretWord[i]);
      // console.log(alphabet.indexOf(sentence[i]));
    } else {
      secretWord[i] = alphabet[index - key + 32];
      // console.log(secretWord[i]);
      // console.log(alphabet.indexOf(sentence[i]));
    }
  }
  return secretWord;
}
console.log(...decription(encription(sentence, key), key));

// można dodać -key i powinno rozwiązać
