import { createRequire } from "module";
const require = createRequire(import.meta.url);

import chalk from "chalk";
import express from "express";
import path from "path";

console.log();

const app = express(dirname);
// const indexHtml = 
app.use(express.static(path.join(__dirname,'../public/index.html')))

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
