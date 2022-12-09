const fetch = require("node-fetch");
const URL = `https://api.github.com/users/`;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=`;

async function getWeather(userName) {
  try {
    const resLocation = await fetch(`${URL}${userName}`);
    if (!resLocation.ok) {
      throw new Error(
        `Problem with getting data. Error: ${resLocation.status}!`
      );
    }
    const dataLocation = await resLocation.json();

    const resWeather = await fetch(`${weatherURL}${dataLocation.location}`);
    if (!resWeather.ok) {
      throw new Error(
        `Problem with getting data. Error: ${resWeather.status}!`
      );
    }
    const dataWeather = await resWeather.json();
    console.log(
      `Current weather: ${dataWeather.weather[0].description}, ${dataWeather.weather[0].main}`
    );
  } catch (error) {
    console.log(`${error}`);
  }
}

module.exports = {
  getWeather: getWeather,
};
