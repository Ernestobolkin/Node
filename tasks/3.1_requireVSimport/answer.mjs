// 1. What is the difference between import and require?
// a.  You can't selectively load only the pieces you need with require but with import,
// you can selectively load only the pieces you need, which can save memory.

// b. Loading is synchronous(step by step) for require on the other hand import can be
// asynchronous(without waiting for previous import) so it can perform a little better than require.

// c. To use the require() statement, a module must be saved with .js extension as opposed to .mjs when the import() statement is used.
// ES modules can be loaded dynamically via the import() function unlike require().

// d. One of the major differences between require() and import() is that require() can be called from anywhere
// inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

// e  .The difference between require and import,
// is that require will automatically scan node_modules to find modules, but import, which comes from ES6, won't.

// 2. How can you enable using the import syntax using node js
// a. you should use .mjs to run the import. exmp:
// import fs from "fs";
// fs.writeFileSync("notes.txt", "This file was created by Node.js ");

// 3. Create 3 functions using the export/import syntax.
// const data = require("./.env")
// console.log(data.NAME);

// 3. Give 2 node.js environment variables that are not available when using the import syntax.
// console.log(process.env.name);

// 4. Create 3 functions using the export/import syntax
// import { helloWrold, sum, helloName } from "./myFuncs.mjs";

// console.log(helloWrold());

// const summ = sum(2, 2);
// console.log(summ);

// console.log(helloName("Ernest"));

// 5. Import the file system module using the import syntax.
// import fs from "fs";
// const msg = fs.readFileSync("./notes.txt", { encoding: "utf8"});
// console.log(msg);