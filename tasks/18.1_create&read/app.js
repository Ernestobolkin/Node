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
} = require("./utils/utils");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/product/:id", getProduct);

app.get("/products", getAll);

app.get("/products/active", getIsActive);

app.get("/products/range", getProdutByrange);

app.post("/product", addProduct);
console.log("works");
app.listen(port, () => {
  console.log(chalk.green("Server is up on port ") + port);
  connect(
    "mongodb://localhost/usersDataBase",
    () => {
      console.log(chalk.yellow("mongoDB connected"));
    },
    (e) => console.error(e)
  );
});
