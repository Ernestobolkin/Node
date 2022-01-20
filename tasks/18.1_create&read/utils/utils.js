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
  const { startingRange, endingRange } = req.body;
  const tes = await Product.where("details.price")
    .gt(startingRange)
    .lt(endingRange);
  res.send(tes);
};

const updateActiveProdect = async (req, res) => {
  const { id } = req.params;
  const { discount } = req.body;

  const product = await findById(id);
  if (product.length !== 0) {
    await Product.updateOne(
      { _id: id },
      { $set: { isActive: !product[0].isActive } }
    );

    if (!product[0].isActive) {
      res.send(`product ${id} is now active`);
      await Product.updateOne(
        { _id: id },
        { $set: { "details.discount": discount } }
      );
    } else {
      res.send(`product ${id} is now off`);
      await Product.updateOne({ _id: id }, { $set: { "details.discount": 0 } });
    }
  } else {
    res.send(`product with id ${id} was not found`);
  }
};

const deletProduct = async (req, res) => {
  const { id } = req.params;
  const product = await findById(id);
  if (product.length !== 0) {
    await Product.deleteOne({ _id: id });
    res.send(`${id} was deleted successfully`);
  }else{
    res.send(`sorry ${id} was not found`)
  }
};
const deletAllProduct = async () => {
  await Product.deleteMany({});
};

const findById = async (id) => {
  const user = await Product.find({ _id: id });
  return user;
};

module.exports = {
  addProduct,
  getAll,
  getProduct,
  getIsActive,
  getProdutByrange,
  updateActiveProdect,
  deletProduct,
  deletAllProduct,
};
