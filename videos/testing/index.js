const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./utils.js");
const fs = require("fs");
// console.log(process.argv[2]);

// creating add command
yargs.command({
  command: "add",
  discribe: "add a new note",
  builder: {
    title: {
      discribe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      discribe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  discribe: "remove a note",
  builder: {
    title: {
      discribe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
    // console.log(chalk.yellow("Removing the note!"));
  },
});

// create list command
yargs.command({
  command: "list",
  discribe: "list the notes",
  handler() {
    notes.notes();
  },
});

// create read command
yargs.command({
  command: "read",
  discribe: "read the note",
  builder: {
    title: {
      discribe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.specificNote(argv.title);
  },
});
yargs.parse();

// if (command === "init") {
//   const obj = {
//     name: "Ernest",
//     lastName: "Tobolkin",
//     salary: 1234,
//   };
//   fs.writeFileSync("data.json", JSON.stringify(obj));
// }

// if (command === "addSal") {
//   const data = fs.readFileSync("data.json").toString();

//   let obj = JSON.parse(data);
//   obj.salary += +process.argv[3];
//   fs.writeFileSync("data.json", JSON.stringify(obj));
// }

// if (command === "show") {
//   const data = fs.readFileSync("data.json").toString();
//   console.log(chalk.green(data));
// }
