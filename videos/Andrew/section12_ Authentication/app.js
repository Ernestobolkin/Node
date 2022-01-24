const express = require("express");
const { connect } = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const { addUser, getAllUsers, updateUser, login } = require("./utils");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user/add", addUser);

app.post("/user/login", login);

app.get("/users", getAllUsers);

app.put("/user/update/:email", updateUser);

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


