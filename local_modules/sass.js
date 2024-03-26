const fs = require('fs');
const { exec } = require('node:child_process');

const watchFolder = './assets/sass';
console.log(`Watching for file changes on ${watchFolder}`);

fs.watch(watchFolder, { recursive: true }, (event, filename) => {

  if (event === 'change') {
    fs.stat (filename, function (err, stat) {
      if(err) return console.error(err)
      const modTime = stat.mtimeMs
      const size = stat.size
      if (stat.isFile()) {
        
        console.log(`${filename} file Changed`);
        
        exec(`npm run compile:sass2`);
      }
    })
  }

});