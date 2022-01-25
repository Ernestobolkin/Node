const express = require("express");
const { connect } = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const auth = require("./middlewares/auth");
const validateLogin = require("./middlewares/validateLogin");
const {
  addUser,
  getAllUsers,
  updateUser,
  login,
  getlUser,
  logout,
  logoutAll,
} = require("./utils");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user/add", addUser);

app.post("/user/login", validateLogin, login);

app.post("/user/logout", auth, logout);

app.post("/user/logoutAll", auth, logoutAll);

app.get("/users", auth, getAllUsers);

app.get("/user/self/:email", auth, getlUser);

app.put("/user/update/:email", auth, updateUser);

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

// const login = async (req, res) => {
//   let user;
//   let token;
//   try{
//     const { email, password } = req.body;
//     const tokenBearer = req.header("Authorization");
//     if (tokenBearer){

//     }
//   }catch(e){
//     res.status(400).send(e.message)
//   }

// }
