const yargs = require("yargs");
const chalk = require("chalk");

// using the yargs library
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

// yargs.parse();


// using process 
if (process.argv[2] === "add") {
  let sum = +process.argv[3] + +process.argv[4];
  console.log(sum);
}
if (process.argv[2] === "sub") {
  let sum = +process.argv[3] - +process.argv[4];
  console.log(sum);
}
if (process.argv[2] === "mult") {
  let sum = +process.argv[3] * +process.argv[4];
  console.log(sum);
}
if (process.argv[2] === "pow") {
  let sum = +process.argv[3] / +process.argv[4];
  console.log(sum);
}
