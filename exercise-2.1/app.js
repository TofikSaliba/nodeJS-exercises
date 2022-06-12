const fs = require("fs");

//! 1.
fs.writeFileSync(
  "readme.txt",
  "ok i see this is the solution were given, but i thought of going the same direction"
);

//! 2.
fs.copyFile("./readme.txt", "copyreadme.txt", (err) => {
  if (err) {
    console.log(err);
  }
});

//! 3.
fs.rename("./readme.txt", "renamedReadme.txt", (err) => {
  if (err) {
    console.log(err);
  }
});

//! 4.
console.log(fs.readdirSync(__dirname));
const files = fs.readdirSync(__dirname);
files.forEach((file) => {
  console.log(file);
});

//! 5. i chose this method, that reads the file, however based on the output i assume it is printing the data as bytes, each byte given as a pair of hexa digits (ex. 6e 7f 33 ...)
console.log(fs.readFileSync("./renamedReadme.txt"));
