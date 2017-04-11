var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/index.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/getMentors', function(req, res) {
  db.knex.select().from('mentors').then(function(mentors) {
    res.send(mentors);
  });
});

var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});
