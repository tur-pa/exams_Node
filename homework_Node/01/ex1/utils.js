function uniq(array) {
  let newArray = [];
  array.forEach((element) => {
    if (newArray.indexOf(element) === -1) {
      newArray.push(element);
    }
  });
  return newArray;
}

function diff(array1, array2) {
  let result = [];

  array1.forEach((element) => {
    if (array2.indexOf(element) === -1) {
      result.push(element);
    }
  });

  return result;
}

module.exports = {
  uniq: uniq,
  diff: diff,
};
