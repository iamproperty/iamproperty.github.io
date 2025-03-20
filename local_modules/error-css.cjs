var postcss = require("postcss");
var cssvariables = require("postcss-css-variables");
const purgecss = require('@fullhuman/postcss-purgecss');
var fs = require("fs");

var mycss = fs.readFileSync("assets/css/error.min.css", "utf8");

fs.writeFile("public/error/css/all.min.css", mycss, (err) => {  if (err) throw err; });

// Default template
postcss([
  purgecss({
    content: ['public/error/index.html']
  })
]).process(mycss).then(output => {
  console.log('- Default error CSS written');
  fs.writeFile("public/error/css/default.min.css", output.css, (err) => {  if (err) throw err; });
});


// 403 template
postcss([
  purgecss({
    content: ['public/error/403.html']
  })
]).process(mycss).then(output => {
  
  console.log('- 404 error page CSS written');
  fs.writeFile("public/error/css/fourohthree.min.css", output.css, (err) => {  if (err) throw err; });
});


// 404 template
postcss([
  purgecss({
    content: ['public/error/404.html']
  })
]).process(mycss).then(output => {
  
  console.log('- 404 error page CSS written');
  fs.writeFile("public/error/css/fourohfour.min.css", output.css, (err) => {  if (err) throw err; });
});


// maintenance template
postcss([
  purgecss({
    content: ['public/error/maintenance.html']
  })
]).process(mycss).then(output => {
  
  console.log('- Maintenance error page CSS written');
  fs.writeFile("public/error/css/maintenance.min.css", output.css, (err) => {  if (err) throw err; });
});



// PWA offline page
postcss([
  purgecss({
    content: ['public/offline/index.html']
  })
]).process(mycss).then(output => {
  
  var offlinePage = fs.readFileSync("public/offline/index.html", "utf8");

  const reg = /(?<=<\!\-\- CSS start \-\->)(.*)(?=<\!\-\- CSS end \-\->)/s;
  const newStr = offlinePage.replace(reg, `
  <style type="text/css">
    ${output}
  </style>
`);

  console.log('- PWA offline error page CSS written (embedded in the html file)');
  fs.writeFile("public/offline/index.html",newStr, (err) => {  if (err) throw err; });
});

