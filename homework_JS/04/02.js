const fetch = require(`node-fetch`);
const URL = `https://rickandmortyapi.com/api/`;

function getData() {
  return fetch(`${URL}character`).then((data) => {
    if (data.ok) {
      return data.json();
    }
    throw new Error(`Status: ${data.status}`);
  });
}

getData()
  .then((data) => {
    const names = data.results.filter(charactersFilter).map(charactersName);
    return console.log(names);
  })
  .catch((error) => console.log(`Error: `, error));

function charactersFilter(character) {
  return character.episode.includes(
    `https://rickandmortyapi.com/api/episode/7`
  );
}

function charactersName(character) {
  return character.name;
}

console.log(``);
