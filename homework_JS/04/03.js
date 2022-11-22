// Create an IIFE that returns an object with fields: method setValue(),
// method showValue() and method reverseValue().
// Calling showValue should log the value, or if there is no value -
// tell us about that. Calling setValue will set given number or string in closure,
// if the argument is other type - throw an error. Value can be type string or number.
// reverseValue(): If number do (*(-1)), if string reverse it.

const iife = (function () {
  let text;
  return {
    showValue: (text) => {
      if (text) {
        return console.log(text);
      }
      return console.log(`No value`);
    },
    setValue: (text) => {
      if (typeof text === "string" || typeof text === "number") {
        return console.log(`{${text}}`);
      }
      return console.log(`Error`);
    },
    reverseValue: (text) => {
      if (typeof text === "string")
        return console.log(text.split(``).reverse().join(``));
      else if (typeof text === "number") return console.log(-1 * text);
    },
  };
})();
iife.showValue(`siema`);
iife.setValue(`siema`);
iife.reverseValue(5);
