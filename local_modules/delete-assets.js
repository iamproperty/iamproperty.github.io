var fs = require('fs')
var path = require('path')



fs.rm("./public/assets",{ recursive: true, force: true }, (err) => {

  if (err) {
    return console.log("error occurred in deleting directory", err);
  }
  
  console.log("Asssets Directory deleted successfully");
});
