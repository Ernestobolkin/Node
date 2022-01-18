const { connect } = require("mongoose");
const chalk = require("chalk");
const Product = require("./productSchema");

connect(
  "mongodb://localhost/e-commerce",
  () => {
    console.log(chalk.yellow("mongoDB connected"));
  },
  (e) => console.error(e)
);

const product1 = {
  name: "id113",
  category: "shoes",
  isActive: true,
  details: {
    description: "snameproducts nameproducts nameproducts nameproducts",
    price: 120,
    images: ["img1", "img2", "img3"],
    phone: "+972503888569",
  },
};
//

const product2 = {
  name: "T-Shirt",
  category: "Shirt",
  isActive: true,
  details: {
    description: "snameproducts nameproducts nameproducts nameproducts",
    price: 100,
    discount: 20,
    images: ["img1", "img2", "img3"],
    phone: +972123456789111,
  },
};
const product3 = {
  name: "test pro",
  category: "shoes",
  isActive: false,
  details: {
    description: "snameproducts nameproducts nameproducts nameproducts",
    price: 120,
    images: ["img1", "img2", "img3"],
    phone: +972542085662,
  },
};

const addP = async (product) => {
  try {
    const createP = await Product.create(product);
    console.log(createP);
    console.log("The Product Waw Created");
  } catch (e) {
    console.log(chalk.red(e));
  }
};

addP(product1);
// addP(product2);
// addP(product3);
