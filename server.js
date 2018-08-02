//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//create express app & port
var app = express();
var PORT = process.env.PORT || 3000;

// sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//router
// require('./app/routing/apiRoutes.js')(app); 
// require('./app/routing/htmlRoutes.js')(app);

// starts server to begin listening
app.listen(PORT, function () {
  console.log('listening on PORT: ' + PORT);
});