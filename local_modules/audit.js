var fs = require('fs')
var path = require('path')

function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","kb","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(0))+e[f]}

var summary = {};

var cssStat = fs.statSync(path.join('./assets/css/style.css'));
var cssSize = formatBytes(cssStat.size);

var cssStatCore = fs.statSync(path.join('./assets/css/core.css'));
var cssCoreSize = formatBytes(cssStatCore.size);

summary['css_size'] = cssSize;
summary['css_core_size'] = cssCoreSize;

console.log("CSS size: "+cssSize);
console.log("Core CSS size: "+cssCoreSize);

fs.writeFile('audit.json', JSON.stringify(summary,null,2), (err) => {  if (err) throw err; });