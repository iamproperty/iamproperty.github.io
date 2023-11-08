const fs = require('fs');
const { exec } = require('node:child_process');

const watchFolder = './assets/sass';
console.log(`Watching for file changes on ${watchFolder}`);

fs.watch(watchFolder, { recursive: true }, (event, filename) => {
  if (filename) {
        console.log(`${filename} file Changed`);
        
        exec(`npm run compile:sass2`);
   }
});