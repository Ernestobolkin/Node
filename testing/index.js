const yargs = require("yargs");
const chalk = require("chalk");
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
  handler: function (argv) {
    console.log(chalk.yellow("Title ") + argv.title);
    console.log(chalk.yellow("Body ") + argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  discribe: "remove a note",
  handler: function () {
    console.log(chalk.yellow("Removing the note!"));
  },
});

// create list command
yargs.command({
  command: "list",
  discribe: "list the notes",
  handler: function () {
    console.log(chalk.yellow("Listing out all the notes!"));
  },
});

// create read command
yargs.command({
  command: "read",
  discribe: "read the note",
  handler: function () {
    console.log(chalk.yellow("read the note!"));
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

// if (command === "add") {
// }
// if (command === " remove") {
// }
