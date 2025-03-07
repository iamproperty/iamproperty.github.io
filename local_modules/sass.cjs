const fs = require('fs');
const { exec } = require('node:child_process');

const watchFolder = './assets/sass';
console.log(`Watching for file changes on ${watchFolder}`);

let prevSassComp;

fs.watch(watchFolder, { recursive: true }, (event, filename) => {

  let correctfilename = __dirname.replace('local_modules','\assets\\sass\\')+filename;

  if (event === 'change') {
    fs.stat (filename, function (err, stat) {
      if(err) return console.error(err)
      const modTime = stat.mtimeMs
      const size = stat.size
      if (stat.isFile() && component !== prevSassComp) {
        
        console.log(`${filename} file Changed`);
        
        exec(`sass assets/sass/core.scss assets/css/core.min.css --style=compressed`);
      }

      prevSassComp = component;
    })
  }

});
