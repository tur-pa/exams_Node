const user = require(`./05_user`);
const repos = require(`./05_repos`);
const weather = require(`./05_weather`);
const argv = require(`yargs`).argv;

const userName = argv.userName;
const followersInfo = argv.followersInfo;

if (!userName) {
  console.log(`Enter the parameter --userName=GITusername`);

  process.exit(0);
}

if (!followersInfo) {
  console.log(
    `After --userName enter the parameter --followersInfo="YES" if you want information about followers
    or --followersInfo="NO" if you dont want that information. Remember to assign value to --userName.`
  );
  process.exit(0);
}

// if (!followersInfo || !userName) {
//   console.log(
//     `Enter the parameter --followersInfo="YES" if you want information about followers
//     or --followersInfo="NO" if you dont want that information. Remember to assign value to --userName.`
//   );
//   process.exit(0);
// }

user.getName(userName, followersInfo);
repos.getRepos(userName);
weather.getWeather(userName);

//TEST: --userName="octocat" --followersInfo="Yes"
