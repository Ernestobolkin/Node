const fs = require("fs")


// 1. creating a file with text indise with node.js that includes the text "This file was created by Node.js"
// fs.writeFileSync("notes.txt","This file was created by Node.js ")

// this func appending new text to the file
// fs.appendFileSync( "notes.txt", "- Testing the function")

// 2. creating a copy file of the notes.txt
// fs.copyFileSync("./notes.txt","copy_notes.txt")

// import { fs } from "fs";

// 3. renames the copy file
// fs.renameSync("./newCopyFile.txt", "test.txt");

//4. loging all the file names iside the file 
// console.log("Files list:",fs.readdirSync("."));

// 5. using the readFileSync method to read the text inside the file
const data = fs.readFileSync("./test.txt", { encoding: "utf8"});
console.log("copyFile content:", data);

