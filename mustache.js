//  using mustache module
var Mustache = require("mustache");
var result = Mustache.render("Hi, {{first}}  {{last}}!", {
    first: "Pijush",
    // middle: "kr",
    last: "Chakraborty"
});
console.log(result);