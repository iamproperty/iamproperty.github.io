const fs = require('fs');
const path = require('path');

const { exec } = require('node:child_process');

const readdirSync = (p, a = []) => {
  if (fs.statSync(p).isDirectory())
    fs.readdirSync(p).map(f => readdirSync(a[a.push(path.join(p, f)) - 1], a))
  return a
}

const files = readdirSync('./assets/ts');
files.forEach((file)=> {

  if(file.endsWith('test.ts') && !file.endsWith('\\test.ts')){
  
    console.log(`Run tests found in ${file}`)
    exec(`node ${file}`, (err, stdout, stderr) =>  {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        console.log(stdout)

        if(stderr){
          console.log(stderr);
          process.exit(1);
        }
      }
    });

  }
});
