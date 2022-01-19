const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicatenotes = notes.filter((item) => {
    return item.title === title;
  });

  if (duplicatenotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New Note Added"));
  } else {
    console.log(chalk.red("Note title Taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filterdNotes = notes.filter((item) => item.title !== title);
  if (notes.length > filterdNotes.length) {
    console.log(chalk.green("Has been removed"));
    saveNotes(filterdNotes);
  } else {
    console.log(chalk.red("No Note Found"));
  }
};

const notes = () => {
  const notes = loadNotes();
  console.log(chalk.yellow("Your Notes:"), notes);
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const specificNote = (title) => {
  const notes = loadNotes();
  const NoteFinder = notes.filter((item) => {
    return item.title === title;
  });
  // if (notes.length > filterdNotes.length) {
  //   console.log(chalk.green("Has been removed"));
  console.log(NoteFinder);
  // } else {
  //   console.log(chalk.red("No Note Found"));
  // }
};

const update = (title, body) => {
  const notes = loadNotes();
  const NoteFinder = notes.filter((item) => {
    return item.title === title;
  });
  console.log();
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
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
