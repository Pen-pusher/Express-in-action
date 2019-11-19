// console.log("HELLO WORLD FROWM NODE")

var express = require("express"); //requires express and  puts it in a variable
var app = express();              //call express and puts the new express application inside the app variale
app.get("/", function (request, response) {
    response.send("Hello, world!"); //says 'Hello World'
});
app.listen(3000, function () {
    console.log("Express app started on port 3000.");//starts the express server on  port 3000 and logs that it has started
});

// Express has a few key features: 
// – Middleware which is a way to break your app into smaller bits of behavior.
//     Generally, middleware is called one by one, in a sequence.
// – Routing similarly breaks your app up into smaller functions that are executed
// when the user visits a particular resource; for example, showing the
// homepage when the user requests the homepage URL.
// – Routers can further break up large applications into smaller, composable
// subapplications.