var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());


var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});