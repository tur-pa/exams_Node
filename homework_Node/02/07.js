const fs = require("fs");

const user = {
  name: "Jan",
  lastName: "Nowak",
};

fs.writeFileSync("07_user.json", JSON.stringify(user));
