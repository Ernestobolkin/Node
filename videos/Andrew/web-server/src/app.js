import { createRequire } from "module";
const require = createRequire(import.meta.url);

import chalk from "chalk";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8080;
const app = express();
app.use(express.static(path.join(__dirname, "../public")));
// app.use(express.static(path.join(__dirname,'../public/index.html')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.get("/help", (req, res) => {
  res.send("<h1>Help Center</h1>");
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
});

app.listen(port, () => {
  console.log(chalk.green("Server is up on port "), chalk.yellow(port));
});
