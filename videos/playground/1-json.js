const chalk = require("chalk");
const fs = require("fs");

// createing a book json file with some data
// const book = {
//   title: "The Witcher - The Last Wish",
//   author: "Andrzej Sapkowski",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-jsonData.json", bookJSON);

const bookBuffer = fs.readFileSync("1-jsonData.json");
const bookJSON = bookBuffer.toString();
const book = JSON.parse(bookJSON);
console.log(book);

book.title = "Sword of Destiny";
book.price = "45";
console.log(book);

const newBookJSON = JSON.stringify(book);
fs.writeFileSync("1-jsonData.json", newBookJSON);


