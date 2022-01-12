import express from "express";
import chalk from "chalk";


const app = express();
const port = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/users", (req, res) => {
  const { data } = req.body;
  const sendBody = {
    response: "success using post",
    routeName: "POST",
    body: {
      data,
    },
  };
  res.send(sendBody);
});

app.put("/put", (req, res) => {
  const { name, id } = req.body;
  const sendBody = {
    response: "success using put",
    routeName: "put",
    body: {
      name,
      id,
    },
  };
  res.send(sendBody);
});

app.delete("/delete", (req, res) => {
  const { name, id } = req.body;
  const sendBody = {
    response: "success using delete",
    routeName: "delete",
    body: {
      name,
      id,
    },
  };
  res.send(sendBody);
});

app.listen(port, () => {
  console.log(chalk.yellow("Server is up on port"), chalk.green.inverse(port));
});


