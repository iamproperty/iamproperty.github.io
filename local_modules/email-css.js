var postcss = require("postcss");
var cssvariables = require("postcss-css-variables");
const purgecss = require('@fullhuman/postcss-purgecss');
var fs = require("fs");

var mycss = fs.readFileSync("assets/css/email.min.css", "utf8");

var newcss = postcss([
  // Then process any CSS variables
  cssvariables(/*options*/),
  
]).process(mycss).css;


fs.writeFile("public/email/css/all.min.css", newcss, (err) => {  if (err) throw err; });

// Default template
postcss([
  // Then process any CSS variables
  purgecss({
    content: ['public/email/index.html']
  })
]).process(newcss).then(output => {
  console.log(output.css);
  fs.writeFile("public/email/css/default.min.css", output.css, (err) => {  if (err) throw err; });
});

// Marketing template
postcss([
  // Then process any CSS variables
  purgecss({
    content: ['public/email/marketing.html']
  })
]).process(newcss).then(output => {
  console.log(output.css);
  fs.writeFile("public/email/css/marketing.min.css", output.css, (err) => {  if (err) throw err; });
});
