const express = require("express");
const { connect } = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const {
  addProduct,
  getAll,
  getProduct,
  getIsActive,
  getProdutByrange,
  updateActiveProdect,
  deletProduct,
  deletAllProduct,
} = require("./utils/utils");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/product/:id", getProduct);

app.get("/products", getAll);

app.get("/products/active/", getIsActive);

app.put("/products/update/:id", updateActiveProdect);

app.get("/products/range", getProdutByrange);

app.post("/product", addProduct);

app.delete("/product/:id", deletProduct);

app.delete("/products",deletAllProduct);

app.listen(port, () => {
  console.log(chalk.green("Server is up on port ") + port);
});
connect(
  "mongodb://localhost/usersDataBase",
  () => {
    console.log(chalk.yellow("mongoDB connected"));
  },
  (e) => console.error(e)
);

const testFunc = ()=>{
  console.log("testBranc");
}