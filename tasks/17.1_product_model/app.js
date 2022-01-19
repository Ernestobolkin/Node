const { connect } = require("mongoose");
const chalk = require("chalk");
const Product = require("./productSchema");
const productArr = require("./productsArr")

connect(
  "mongodb://localhost/e-commerce",
  () => {
    console.log(chalk.yellow("mongoDB connected"));
  },
  (e) => console.error(e)
);

const addP = async () => {
  try {
    const createP = await Product.create(productArr);
    console.log(createP);
    console.log("The Products Was Created");
  } catch (e) {
    console.log(chalk.red(e));
  }
};



