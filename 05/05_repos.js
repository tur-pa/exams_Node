const fetch = require("node-fetch");
const URL = `https://api.github.com/users/`;

async function getRepos(userName) {
  try {
    const res = await fetch(`${URL}${userName}/repos`);
    if (!res.ok) {
      throw new Error(`Problem with getting data. Error: ${res.status}!`);
    }
    const resData = await res.json();
    const reposLength = resData.map((currRepo) => currRepo.id).length;
    const reposName = resData.map((currRepo) => currRepo.name);
    console.log(`Number of repos: ${reposLength}`);
    console.log(`Names of repos: ${reposName}`);
  } catch (error) {
    console.log(`${error}`);
  }
}

module.exports = {
  getRepos: getRepos,
};
