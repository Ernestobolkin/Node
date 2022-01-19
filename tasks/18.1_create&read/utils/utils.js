const Product = require("../productSchema/schema");

const addProduct = async (req, res) => {
  const data = req.body;
  try {
    await Product.create(data);
    res.send(`Product ${data.name} Was Created`);
  } catch (error) {
    res.send(error.message);
  }
};

const getAll = async (req, res) => {
  const usersData = await Product.find();
  if (usersData.length <= 0) {
    res.send("Sorry, There Is No Users To Show");
  } else {
    res.send(usersData);
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await Product.find({ _id: id });
    res.send(`Product ${user} Was Created`);
  } catch (err) {
    res.send(`User With The Id ${id} Was Not Found`);
  }
};

const getIsActive = async (req, res) => {
  try {
    const activeProducts = await Product.find({ isActive: true });
    res.send(`Product ${activeProducts} Was Created`);
  } catch (err) {
    res.send(`Sorry, no user hase been found`);
  }
};

const getProdutByrange = async (req, res) => {
  // const { startingRange, endingRange } = req.body;
  res.send("ok")
  // res.send(`${startingRange}`)
  // console.log(startingRange,endingRange);
};

module.exports = {
  addProduct,
  getAll,
  getProduct,
  getIsActive,
  getProdutByrange,
};
