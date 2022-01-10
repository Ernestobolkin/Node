const yargs = require("yargs");
const chalk = require("chalk");

yargs.command({
  command: "add",
  discribe: "adding 2 args",
  handler: function () {
    let sum = yargs.argv._[1] + yargs.argv._[2];
    console.log(chalk.red(sum));
  },
});

yargs.command({
  command: "sub",
  discribe: "substract 2 args",
  handler: function () {
    let sum = yargs.argv._[1] - yargs.argv._[2];
    console.log(chalk.red(sum));
  },
});

yargs.command({
  command: "mult",
  discribe: "multiply 2 args",
  handler: function () {
    let sum = yargs.argv._[1] * yargs.argv._[2];
    console.log(chalk.red(sum));
  },
});

yargs.command({
  command: "pow",
  discribe: "pow 2 args",
  handler: function () {
    let sum = yargs.argv._[1] / yargs.argv._[2];
    console.log(chalk.red(sum));
  },
});

yargs.parse();
