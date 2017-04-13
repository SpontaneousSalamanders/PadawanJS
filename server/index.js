var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/index.js');
var handler = require('./routes/requestHandler.js');
var path = require('path');

// fake users
var users = require('./auth/users.js');

var auth = require('./auth/auth.js')();
var authHandler = require('./auth/routes/requestHandler.js')

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(auth.initialize())
app.use(express.static(__dirname + '/../client/dist'));

// serve up / but not sure if needed
app.get('/', function(req, res) {
  res.sendFile(__dirname, + '/../client/dist')
})

app.get('/getMentors', handler.getMentors);
app.get('/getMentorProfile', handler.getMentorProfile);
app.get('/getEvents/:uid', handler.getEvents);
app.get('/getResources/:uid', handler.getResources);
app.get('/*');

// authentication

app.get("/user", auth.authenticate(), function(req, res) {
    res.json(users[req.user.id]);
});


app.post('/token', authHandler.generateToken);

var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});
