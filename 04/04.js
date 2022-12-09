const fetch = require("node-fetch");
const fs = require("fs");
const data = require("./data.json");

async function getData(number) {
  try {
    const res = await fetch(`http://numbersapi.com/${number}?json`);
    if (!res.ok)
      throw new Error(`Problem with getting data. Error: ${res.status}`);
    const savedData = await res.json();
    if (savedData.found) {
      fs.writeFile(data.filename, JSON.stringify(savedData.text), (err) => {
        if (err) {
          console.log(err);
        }
        console.log(`Data saved in ${data.filename}`);
      });
    } else {
      console.log(
        `There was no fact for the requested number. Try another number.`
      );
    }
  } catch (error) {
    console.log(`${error}`);
  }
}

getData(data.number);
