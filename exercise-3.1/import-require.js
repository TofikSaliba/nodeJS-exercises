//! What is the difference between import and require?

//* 1.
//? Require is Non-lexical, it stays where they have put the file.
//? Import is lexical, it gets sorted to the top of the file.

//* 2.
//? Require can be called at any time and place in the program.
//? import can’t be called conditionally, it always run in the beginning of the file.

//* 3.
//? You can directly run the code with require statement.
//? To run a program containing import statement you have to use experimental module feature flag.

//* 4.
//? If you want to use require module then you have to save file with ‘.js’ extension.
//? If you want to use import module then you have to save file with ‘.mjs’ extension.

//! to use import syntax we need to add, "type": "module" to the package json or use mjs extension

//! Give 2 node.js environment variables that are not available when using the import syntax.
//? __dirname and __filename

// import fs from "fs";
import { add, mult, sub } from "./importFromHere.js";

//! 3 functions that use export/import syntax
console.log(add(5, 3), mult(5, 3), sub(5, 3));

// fs.writeFileSync(
//   "readme.txt",
//   "goal: exported the file system via import syntax"
// );
