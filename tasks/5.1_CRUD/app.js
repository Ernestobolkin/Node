const yargs = require("yargs");
const notes = require("./users.js");

yargs.command({
  command: "add",
  discribe: "add a new user",
  builder: {
    email: {
      discribe: "User Email",
      demandOption: true,
      type: "string",
    },
    name: {
      discribe: "User Name",
      demandOption: true,
      type: "string",
    },
    // test: {
    //   discribe: "User Name",
    //   demandOption: true,
    //   type: "string",
    // },
  },
  handler(argv) {
    notes.addNote(argv.email, argv.name);
  },
});

yargs.command({
  command: "remove",
  discribe: "remove a User",
  builder: {
    email: {
      discribe: "User Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.email);
  },
});

yargs.command({
  command: "list",
  discribe: "Users List",
  handler() {
    notes.notes();
  },
});

yargs.command({
  command: "read",
  discribe: "read the note",
  builder: {
    email: {
      discribe: "User Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.specificNote(argv.email);
  },
});

yargs.command({
  command: "update",
  discribe: "update the note",
  builder: {
    email: {
      discribe: "User Email",
      demandOption: true,
      type: "string",
    },
    newEmail: {
      discribe: "User Name",
      demandOption: true,
      type: "string",
    },
    newName: {
      discribe: "User Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.update(argv.email, argv.newEmail, argv.newName);
  },
});

// yargs.parse();
yargs.argv
