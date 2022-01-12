import { createRequire } from "module";
const require = createRequire(import.meta.url);

import chalk from "chalk";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);
console.log(__dirname);

const app = express();
app.use(express.static(path.join(__dirname, "../public/index.html")));
// app.use(express.static(path.join(__dirname,'../public/index.html')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.get("/help", (req, res) => {
  res.send({
    name: "Ernest",
  });
});
app.get("/about", (req, res) => {
  res.send("testing express lib");
});

app.listen(3000, () => {
  console.log(chalk.green("Server is up on port "), chalk.yellow("3000"));
});
