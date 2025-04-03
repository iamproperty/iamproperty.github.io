const fs = require('fs');
const { exec } = require('node:child_process');

let prevComp;
let compTimeout;

const watchFolder = __dirname.replace('local_modules','\assets\\js\\components');
console.log(`Watching for file changes on ${watchFolder}`);

fs.watch(watchFolder, { recursive: true }, (event, filename) => {

  let correctfilename = __dirname.replace('local_modules','\assets\\js\\components\\')+filename;

  if (event === 'change') {
    fs.stat (correctfilename, function (err, stat) {

      if(err) return console.error(err)
      const modTime = stat.mtimeMs
      const size = stat.size

      let component = filename.split('\\')[0];

      if (stat.isFile() && component !== prevComp && !filename.endsWith('.min.js') && !filename.endsWith('.map')) {
        
        exec(`rollup --environment COMPONENT:${component} --config rollup-component.config.cjs --sourcemap`);
        console.log(`${component} compiled`);

        prevComp = component;
        clearTimeout(compTimeout);
        compTimeout = setTimeout(function(){
          prevComp = "";
        }, 100);
      }
    })
  }
});

const watchFolderModules = __dirname.replace('local_modules','\assets\\js\\modules');
console.log(`Watching for file changes on ${watchFolderModules}`);

fs.watch(watchFolderModules, { recursive: true }, (event, filename) => {

  let correctfilename = __dirname.replace('local_modules','\assets\\js\\modules\\')+filename;

  if (event === 'change') {
    fs.stat (correctfilename, function (err, stat) {

      if(err) return console.error(err)
      const modTime = stat.mtimeMs
      const size = stat.size

      let component = filename.split('.')[0];

      if (stat.isFile() && component !== prevComp && !filename.endsWith('.min.js') && !filename.endsWith('.map')) {
        
        exec(`rollup --environment COMPONENT:${component} --config rollup-component.config.cjs --sourcemap`);
        console.log(`${component} compiled`);

        prevComp = component;
        clearTimeout(compTimeout);
        compTimeout = setTimeout(function(){
          prevComp = "";
        }, 100);
      }
    })
  }
});


let prevSassComp;
let sassCompTimeout;

const watchSassFolder = __dirname.replace('local_modules','\assets\\css\\components');
console.log(`Watching for file changes on ${watchSassFolder}`);

fs.watch(watchSassFolder, { recursive: true }, (event, filename) => {

  let correctfilename = __dirname.replace('local_modules','\assets\\css\\components\\')+filename;

  if (event === 'change') {
    fs.stat (correctfilename, function (err, stat) {

      if(err) return console.error(err)
      const modTime = stat.mtimeMs
      const size = stat.size

      let component = filename.split('.')[0];

      if (stat.isFile() && component !== prevSassComp && !filename.endsWith('.map')) {
        
        exec(`rollup --environment COMPONENT:${component} --config rollup-component.config.cjs --sourcemap`);
        console.log(`${component} compiled`);

        prevSassComp = component;
        clearTimeout(sassCompTimeout);
        sassCompTimeout = setTimeout(function(){
          prevSassComp = "";
        }, 100);
      }

    })
  }
});