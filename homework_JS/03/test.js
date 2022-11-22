const films = require("./sw-films.json");
const planets = require("./sw-planets.json");
const people = require("./sw-people.json");
const starships = require("./sw-starships.json");

// count sum of all starships cost from episodes 4-6
console.log(
  "Sum of all starships cost from episodes 4 - 6 is: " +
    sumAllStarshipsCostFromEpisodes(4, 6)
);

function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
  const starshipUrls = films
    .filter((film) => film.episode_id >= startEp && film.episode_id <= endEp)
    .map((film) => film.starships)
    .flat();
  console.log(starshipUrls);
  const filteredStarships = starships.filter(
    (starship) =>
      starshipUrls.includes(starship.url) &&
      starship.cost_in_credits !== "unknown"
  );
  return filteredStarships.reduce(reduceByCost, 0);
}

// function getFilterByEpisode(startEp, endEp) {
//   return (film) => film.episode_id >= startEp && film.episode_id <= endEp;
// }

// function mapStarshipUrls(film) {
//   return film.starships;
// }

// function filterShipsByUrlArr(urlArray) {
//   return (starship) =>
//     urlArray.includes(starship.url) && starship.cost_in_credits !== "unknown";
// }

function reduceByCost(sum, starship) {
  sum += +starship.cost_in_credits;
  return sum;
}
console.log(``);
