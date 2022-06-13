const fs = require("fs");
const chalk = require("chalk");
const uniqid = require("uniqid");

const createUser = (name, email) => {
  const users = loadUsers();
  const dublicate = users.find((user) => {
    return user.email === email;
  });
  if (!dublicate) {
    users.push({
      id: uniqid.time(),
      name: name,
      email: email,
    });
    console.log(chalk.green.inverse("user added successfully"));
    saveUsers(users);
  } else {
    console.log(chalk.red.inverse("user email is already in use"));
  }
};

const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);

  fs.writeFileSync("users.json", dataJSON);
};

const loadUsers = () => {
  try {
    const buffer = fs.readFileSync("users.json");
    const json = buffer.toString();
    return JSON.parse(json);
  } catch (err) {
    return [];
  }
};

const readUser = (id) => {
  const users = loadUsers();
  const user = users.find((user) => {
    return user.id === id;
  });
  if (user) {
    const userPrint = chalk.inverse(user.id);
    console.log(userPrint + "\n" + user.name + "\n" + user.email);
  } else {
    console.log(chalk.red.inverse(`user ID: ${id} was not found`));
  }
};

const updateUser = (id, newName, newMail) => {
  if (!newName && !newMail) {
    console.log(chalk.red.inverse(`must at least provide one, name or email`));
    return;
  }
  const users = loadUsers();
  const user = users.find((user) => {
    return user.id === id;
  });
  if (user) {
    if (newName) {
      user.name = newName;
    }
    if (newMail) {
      user.email = newMail;
    }
    saveUsers(users);
  } else {
    console.log(chalk.red.inverse(`user ID: ${id} was not found`));
  }
};

const deleteUser = (id) => {
  const users = loadUsers();
  const newUsers = users.filter((user) => {
    return user.id !== id;
  });
  if (users.length > newUsers.length) {
    saveUsers(newUsers);
    console.log(chalk.green.inverse(`user ID: ${id} was successfully deleted`));
  } else {
    console.log(chalk.red.inverse(`user ID: ${id} was not found`));
  }
};

module.exports = {
  loadUsers: loadUsers,
  createUser: createUser,
  saveUsers: saveUsers,
  readUser: readUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
};
