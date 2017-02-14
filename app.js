// Express set up
var express = require('express');
var app = express();

// Run index.html
app.use(express.static(__dirname));
app.get("/", function(req, res) {
  res.render("index");
});

// Run app on port 3000
app.listen(3000);
console.log('Weather WebApp for Massless Technologies running on port 3000.');
