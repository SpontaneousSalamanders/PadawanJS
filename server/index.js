var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/index.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/getMentors', function(req, res) {
  db.knex.select('cat').from('mentors')
  .then(function(mentors) {
    res.status(200).send(mentors);
  })
  .catch(function(error) {
    res.status(error.status || 500).send({'error in server/index.js': error});
  });
});

var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});
