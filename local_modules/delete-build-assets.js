var fs = require('fs')
var path = require('path')



fs.rm("./assets/css",{ recursive: true, force: true }, (err) => {

  if (err) {
    return console.log("error occurred in deleting directory", err);
  }
  
  console.log("Asssets Directory deleted successfully");
});

fs.rm("./assets/js",{ recursive: true, force: true }, (err) => {

  if (err) {
    return console.log("error occurred in deleting directory", err);
  }
  
  console.log("Asssets Directory deleted successfully");
});
