const { connect } = require("mongoose");
const chalk = require("chalk");
const Product = require("./productSchema");
const productArr = require("./productsArr")

connect(
  "mongodb://localhost/bank_api",
  () => {
    console.log(chalk.yellow("mongoDB connected"));
  },
  (e) => console.error(e)
);

const addClient = async (data) => {
  try {
    const createP = await Product.create(data);
    console.log(createP);
    console.log("The Products Was Created");
  } catch (e) {
    console.log(chalk.red(e));
  }
};

module.exports = addClient