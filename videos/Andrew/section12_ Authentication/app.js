const express = require("express");
const { connect } = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const auth = require("./middleware/auth");
const {
  addUser,
  getAllUsers,
  updateUser,
  login,
  getlUser,
  logout,
} = require("./utils");

const app = express();
const port = process.env.PORT || 8080;

// app.use((req, res, next) => {
// if(req.method==="GET"){
//     res.send("GET requests are disabled")
// }else{
//   next()
// }
// });

// app.use((req, res, next)=>{
//   res.status(503).send("Site is curently down, Chack back soon")
// })

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/user/add", addUser);

app.post("/user/login", login);

app.post("/user/logout", auth, logout);

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
