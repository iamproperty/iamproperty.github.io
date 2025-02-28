var fs = require('fs')
var path = require('path')

function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","kb","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(0))+e[f]}

var summary = {};
console.log("Files size: ");

// CSS
var cssStat = fs.statSync(path.join('./assets/css/style.min.css'));
var cssSize = formatBytes(cssStat.size);
summary['css_size'] = cssSize;
console.log("- CSS: "+cssSize);

var cssStatCore = fs.statSync(path.join('./assets/css/core.min.css'));
var cssCoreSize = formatBytes(cssStatCore.size);
summary['css_core_size'] = cssCoreSize;
console.log("- Core CSS: "+cssCoreSize);

// JS
var jsStat = fs.statSync(path.join('./assets/js/scripts.bundle.min.js'));
var jsSize = formatBytes(jsStat.size);
summary['js_size'] = jsSize;
console.log("- JS: "+jsSize);

var totalJSstat = jsStat.size;

var components = require('../components.json');

Array.from(components).forEach((component) => {

  var compStat = fs.statSync(path.join(`./assets/js/components/${component}/${component}.component.min.js`));
  var compSize = formatBytes(compStat.size);
  summary[`${component}_size`] = compSize;
  console.log(`-- ${component} component: `+compSize);

  totalJSstat += compStat.size;
});

var totalJSsize = formatBytes(totalJSstat);

summary[`Total_JS_size`] = totalJSsize;
console.log(`- Total JS size: `+totalJSsize);




//SVGs
var logoStat = fs.statSync(path.join('./assets/svg/logo.svg'));
var logoSize = formatBytes(logoStat.size);
summary['logo_size'] = logoSize;
console.log("- Logo SVG: "+logoSize);

// Images
var assets_size = 0;

var filenames = fs.readdirSync('./assets/img', function(err, filenames) { return filenames; });

filenames.forEach(function(filename) {

  var file_stat = fs.statSync(path.join('./assets/img',filename));
  assets_size = assets_size + file_stat.size;
});

var asset_count = filenames.length;
assets_size = formatBytes(assets_size);
summary['img_size'] = assets_size;
summary['img_count'] = asset_count;
console.log("- Images("+asset_count+"): "+assets_size);


// Font files
var fonts_size = 0;
var fonts_count = 0;

var filenames = fs.readdirSync('./assets/fonts', function(err, filenames) { return filenames; });

filenames.forEach(function(filename) {

  if(filename.endsWith('.woff2')){
    var file_stat = fs.statSync(path.join('./assets/fonts',filename));
    fonts_size = fonts_size + file_stat.size;
    fonts_count++;
  }
});

fonts_size = formatBytes(fonts_size);
summary['fonts_size'] = fonts_size;
summary['fonts_count'] = fonts_count;
console.log("- Fonts("+fonts_count+"): "+fonts_size);

fs.writeFile('audit.json', JSON.stringify(summary,null,2), (err) => {  if (err) throw err; });