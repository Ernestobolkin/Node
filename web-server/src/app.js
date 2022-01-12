import { createRequire } from "module";
const require = createRequire(import.meta.url);

import chalk from "chalk";
import express from "express";
import path from "path";
// import { dirname } from "path";

console.log(__dirname);

const app = express(dirname);
app.use(express.static(path.join(dirname,'../public/index.html')))

app.get("", (req, res) => {
  res.send("indexHtml");
});
app.get("/help", (req, res) => {
  res.send({
    name:"Ernest"
  });
});
app.get("/about", (req, res) => {
  res.send("testing express lib");
});


app.listen(3000, () => {
  console.log(chalk.green("Server is up on port "),chalk.yellow("3000"));
});
import chalk from "chalk";
import express from "express";
import path from "path";
// import { dirname } from "path";

console.log(__dirname);

const app = express(dirname);
app.use(express.static(path.join(dirname,'../public/index.html')))

app.get("", (req, res) => {
  res.send("indexHtml");
});
app.get("/help", (req, res) => {
  res.send({
    name:"Ernest"
  });
});
app.get("/about", (req, res) => {
  res.send("testing express lib");
});


app.listen(3000, () => {
  console.log(chalk.green("Server is up on port "),chalk.yellow("3000"));
});
