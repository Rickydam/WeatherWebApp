// Express set up
var express = require('express');
var app = express();

// Run index.html
app.use(express.static(__dirname));
app.get("/", function(req, res) {
  res.render("index");
});

// Run app on port 3000
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Weather WebApp for Massless Technologies running on port 3000.');

// Prevent the Heroku app from sleeping
var http = require('http');
setInterval(function() {
  http.get('http://rickydam-weather.herokuapp.com');
}, 1500000); // Ping the website every 25 minutes
