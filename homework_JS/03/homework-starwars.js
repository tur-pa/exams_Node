const films = require("./sw-films.json");
const planets = require("./sw-planets.json");
const people = require("./sw-people.json");
const starships = require("./sw-starships.json");

// //count sum of all starships cost from episodes 4-6

function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
  let filmFilter = films
    .filter(
      (currEp) => currEp.episode_id >= startEp && currEp.episode_id <= endEp
    )
    .map((currEp) => currEp.starships)
    .flat();

  // DELETE DUPLICATE
  filmFilter = Array.from(new Set(filmFilter));

  let shipSum = starships
    .filter((currShip) => {
      for (let i = 0; i <= filmFilter.length; i++) {
        if (currShip.url === filmFilter[i]) return true;
      }
    })
    .map((currShip) => Number(currShip.cost_in_credits)) // ONLY COST
    .filter((currCost) => !isNaN(currCost)) // DUE TO SOME ARE UNKNOWN -> DELETED
    .reduce((sum, currCost) => sum + currCost, 0); // SUM
  return shipSum;
}

console.log(
  "Sum of all starships cost from episodes 4 - 6 is: " +
    sumAllStarshipsCostFromEpisodes(4, 6)
);

// // find the fastest starship you can afford having 8500000 credits

console.log(
  "Fastest ship I can get for up to 8500000 is: " + getFastestShipFor(8500000)
);

function getFastestShipFor(money) {
  let ship = starships
    .filter((currShip) => currShip.cost_in_credits <= money)
    .sort(
      (shipA, shipB) =>
        shipA.max_atmosphering_speed - shipB.max_atmosphering_speed
    );

  // CHECK IF THERE ARE MORE THAN 1 STARSHIP
  let maxSpeed = ship[ship.length - 1].max_atmosphering_speed;
  ship = ship
    .filter((currShip) => currShip.max_atmosphering_speed === maxSpeed)
    .map((currShip) => currShip.name);
  return ship;
}

// // find planet name with the lowest difference between the rotation period and orbital period

console.log(
  "Planet name with the lowest difference between the rotation period and orbital period is: " +
    getPlanetNameWithLowestDifference()
);

// DELETED KEYS1 & KEYS2 -> NOT WORK
function getPlanetNameWithLowestDifference() {
  let planetName = planets
    .map(({ name, orbital_period, rotation_period }) => {
      let diff = Number(orbital_period) - Number(rotation_period);
      return { name, diff }; // NEW OBJ WITH DIFFERENCE
    })
    .sort((diffA, diffB) => diffA.diff - diffB.diff);
  return planetName[0].name;
}

// // map all starships with crew <= 4 that were created between 10 dec 2014 and 15 dec 2014

console.log(
  "Ships with max crew of 4 created between 10.12.2014 - 12.12.2014 number is: " +
    getCrewShipFrom(4, new Date(2014, 12, 10), new Date(2014, 12, 12))
);

function getCrewShipFrom(maxCrew, dateStart, dateEnd) {
  // MONTHS START FROM 0 -> CORRECTION
  dateStart.setMonth(dateStart.getMonth() - 1);
  dateEnd.setMonth(dateEnd.getMonth() - 1);

  // CHANGE TO UNIX
  let unixStart = dateStart.getTime();
  let unixEnd = dateEnd.getTime();

  //FILTER
  let ship = starships
    .filter((currShip) => currShip.crew <= maxCrew)
    .filter((currDate) => {
      let unixDate = new Date(currDate.created).getTime();
      return unixDate >= unixStart && unixDate <= unixEnd;
    })
    .map((currShip) => currShip.name);
  return ship;
}

// // create an array of people’s names from episodes 1 and 5 sorted by the diameter of origin planet low to high

console.log(
  "People from ep 1 - 5 sorted by origin planet diameter low to high: " +
    getPeopleSortedByOriginPlanetDiameter(1, 5)
);

function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
  // FILTER FILMS BY => URL
  let filmsFilter = films
    .filter(
      (currMovie) =>
        currMovie.episode_id === startEp || currMovie.episode_id === endEp
    )
    .map((currPlanet) => currPlanet.planets)
    .flat();

  // DELETE DUPLICATE
  planetFilterUrl = Array.from(new Set(filmsFilter));

  // SORT PLANETS BY DIM
  let planetSortByDim = planets
    .filter((currPlanet) => {
      for (let i = 0; i <= planetFilterUrl.length; i++) {
        if (currPlanet.url === planetFilterUrl[i]) return true;
      }
    })
    .sort((currPlanetA, currPlanetB) => {
      return Number(currPlanetA.diameter) - Number(currPlanetB.diameter);
    });

  // GETTING URL FROM SORTED PLANETS
  let sortedNamesUrl = planetSortByDim
    .map((currPlanet) => currPlanet.residents)
    .flat();

  // URL FROM SORTED PLANET CHANGED TO NAMES
  let sortedNames = [];
  sortedNamesUrl.forEach((element) => {
    for (let j = 0; j <= Object.keys(people).length; j++) {
      if (element === people[j].url) {
        return sortedNames.push(people[j].name);
      }
    }
  });
  return sortedNames;
}

// // GROUPBY
//   .reduce((acc, currShip) => {
//     if (!acc[currShip.max_atmosphering_speed]) {
//       acc[currShip.max_atmosphering_speed] = [];
//     }
//     acc[currShip.max_atmosphering_speed].push(currShip);
//     return acc;
//   }, {});
// ship = Object.values(ship);
// let minShips = ship[ship.length - 1];
