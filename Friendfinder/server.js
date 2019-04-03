var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// var HOST = "0.0.0.0";


var app = express();
var PORT = process.env.PORT || 3000;

app.use (express.urlencoded({ extended: true}));
app.use(express.json());


app.use(express.static('./app/public'));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});


