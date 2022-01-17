import express from "express";
import chalk from "chalk";
import { middleware } from "yargs";


const app = express();
const port = 8000;
app.use(express.json());

let numbersArr = [1, 2, 3, 4, 5, 6];

app.get("/", (req, res) => {
  res.send(`<h1 style='color:red'>${numbersArr}</h1>`);
});

app.post("/users",middleware, (req, res) => {
  const { number } = req.body;
  const sendBody = {
    response: "success using post",
    routeName: "POST",
    body: {
      number,
    },
  };
  try {
    if (numbersArr.includes(+number)) {
      throw new Error(
        `<h1>400</h1><h2 style='color:red'>Sorry, The Number ${number} Already Exists! </h2>`
      );
    } else {
      numbersArr.push(number);
      res.send(
        `<h1 style='color:red'>${numbersArr.sort((a, b) => a - b)}</h1>`
      );
    }
  } catch (err) {
    res.send(err.toString());
  }
});

// route and delete with params
app.delete("/delete/:number", (req, res) => {
  const { number } = req.params;
  // const { number } = req.query;
  // numbersArr = numbersArr.filter((num) => num !== +number);
  const newArr = numbersArr.filter((num) => num !== +number);
  try {
    if (JSON.stringify(newArr) == JSON.stringify(numbersArr)) {
      throw new Error(
        `<h1>400</h1><h2 style='color:red'>Sorry, The Number ${number} Doesnt Exist! </h2>`
      );
    } else {
      numbersArr = newArr;
      res.send(
        `<h1 style='color:red'>${numbersArr.sort((a, b) => a - b)}</h1>`
      );
    }
  } catch (err) {
    res.send(err.toString());
  }
});

// route and delete with query
app.delete("/delete", (req, res) => {
  const { number } = req.query;
  try {
    const newArr = numbersArr.filter((num) => num !== +number);
    if (JSON.stringify(newArr) == JSON.stringify(numbersArr)) {
      throw new Error(
        `<h1>400</h1><h2 style='color:red'>Sorry, The Number ${number} Doesnt Exist! </h2>`
      );
    } else {
      numbersArr = newArr;
      res.send(
        `<h1 style='color:red'>${numbersArr.sort((a, b) => a - b)}</h1>`
      );
    }
  } catch (err) {
    res.send(err.toString());
  }

  res.send(`<h1 style='color:red'>${numbersArr.sort((a, b) => a - b)}</h1>`);
});

app.put("/put/:number", (req, res) => {
  const { number } = req.params;
  const { newNumber } = req.body;

  try {
    console.log(numbersArr.includes(number));
    if (numbersArr.includes(+number)) {
      numbersArr = numbersArr.map((num) => {
        if (num === +number) {
          return +newNumber;
        } else {
          return num;
        }
      });
      res.send(
        `<h1 style='color:red'>${numbersArr.sort((a, b) => a - b)}</h1>`
      );
    } else {
      throw new Error(
        `<h1>400</h1><h2 style='color:red'>Sorry, The Number ${number} Doesnt Exist! </h2>`
      );
    }
  } catch (err) {
    res.send(err.toString());
  }

});

app.listen(port, () => {
  console.log(chalk.yellow("Server is up on port"), chalk.green.inverse(port));
});
