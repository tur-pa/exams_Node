const fetch = require("node-fetch");
const URL = `https://api.github.com/users/`;
let location;

async function getName(userName, followersInfo) {
  try {
    const res = await fetch(`${URL}${userName}`);
    if (!res.ok) {
      throw new Error(`Problem with getting data. Error: ${res.status}!`);
    }
    const resData = await res.json();
    if (resData.name) console.log(`Name of user: ${resData.name}`);
    else console.log(`Error: user has no name!`);

    if (followersInfo.toLowerCase() === "yes") {
      return console.log(`Number of followers: ${resData.followers}`);
    }
  } catch (error) {
    console.log(`${error}`);
  }
}

module.exports = {
  getName: getName,
};
