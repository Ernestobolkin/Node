const chalk = require("chalk");
const express = require("express");
const cors = require("cors");
const addNewUser = require("./serverSide/app");
// const apiRouter = require("./routes/apiRoutes.js");

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// app.use("/api", apiRouter);

app.post("/users", (req, res) => {
  try {
    const data = req.body;
    addNewUser(data);
    res.send("works");
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(chalk.green("Server is up on port ") + port);
});
