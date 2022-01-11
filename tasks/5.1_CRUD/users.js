const chalk = require("chalk");
const fs = require("fs");
const uniqid = require("uniqid");

const addNote = (email, name) => {
  const users = loadUsers();
  const duplicatenotes = users.filter((item) => {
    return item.email === email;
  });

  if (duplicatenotes.length === 0) {
    users.push({
      id: uniqid(),
      email: email,
      name: name,
    });
    saveNotes(users);
    console.log(chalk.green("A New User Has been Added"));
  } else {
    console.log(chalk.red.inverse("User Name Taken"));
  }
};

const update = (email, newEmail, newName) => {
  const users = loadUsers();
  const NoteFinder = users.find((item) => {
    return item.email === email;
  });
  if (NoteFinder) {
    NoteFinder.email = newEmail;
    NoteFinder.name = newName;
    saveNotes(users);
    console.log(chalk.green("You Edited The User Succcessfully"));
  } else {
    console.log(chalk.red.inverse("User Not found"));
  }
};

const removeNote = (email) => {
  const users = loadUsers();
  const filterdNotes = users.filter((item) => item.email !== email);
  if (users.length > filterdNotes.length) {
    console.log(chalk.green("User Has been removed"));
    saveNotes(filterdNotes);
  } else {
    console.log(chalk.red.inverse("No User Found"));
  }
};

const notes = () => {
  const users = loadUsers();
  console.log(chalk.yellow.inverse("Users:"), users);
};

const saveNotes = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("data.json", dataJSON);
};

const specificNote = (email) => {
  const users = loadUsers();
  const NoteFinder = users.filter((item) => {
    return item.email === email;
  });
  if (NoteFinder.length > 0) {
    console.log(chalk.green("User Has been Found"));
    console.log(NoteFinder);
  } else {
    console.log(chalk.red.inverse("Didnt Found The User"));
  }
};

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("data.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    console.log(chalk.green.inverse("Created the DataBase"));
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  notes: notes,
  specificNote: specificNote,
  update: update,
};
