const fs = require("fs");
const path = require("path");
const casual = require("casual");

const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      id: i + 1,
      firstName: casual.first_name,
      lastName: casual.last_name,
      email: casual.email,
      city: casual.city,
      registeredDate: casual.date("YYYY-MM-DD"),
    });
  }
  return users;
};

const data = {
  users: generateUsers(500),
};

const dbFilePath = path.join(__dirname, "db.json");

fs.writeFile(dbFilePath, JSON.stringify(data, null, 2), (err) => {
  if (err) {
    console.error("Error writing data to db.json:", err);
  } else {
    console.log("Data generation completed and mock-server/db.json updated!");
  }
});
console.log("Data generation completed!");
