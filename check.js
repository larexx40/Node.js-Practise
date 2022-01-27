const fs = require("fs");

const path = "./index.js";
const file = "./package.json";

fs.exists(path, function (isExist) {
  if (isExist) {
    console.log("exists:", path);
  } else {
    console.log("DOES NOT exist:", path);
  }
});

// check if the file exists in the current directory.
fs.access(file, fs.constants.F_OK, (isExists) => {
    if (!isExists) {
        console.log("exists:", file);
      } else {
        console.log("DOES NOT exist:", file);
      }
});