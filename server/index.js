var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/index.js');
var handler = require('./routes/requestHandler.js');
var path = require('path');
var cors = require('cors');

// authentication routes
var authRouter = require('./routes/authRoutes.js')


var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json({ type: '*/*' }));

// Allow cross-origin resource sharing
app.use(cors());
app.options('*', cors());

app.use(express.static(__dirname + '/../client/dist'));

// serve up / but not sure if needed
app.get('/', function(req, res) {
  res.sendFile(__dirname, + '/../client/dist')
})

app.get('/getMentors', handler.getMentors);
app.get('/getMentorProfile/:uid', handler.getMentorProfile);
app.get('/getEvents/:uid', handler.getEvents);
app.get('/getMenteeEvents/:uid', handler.getMenteeEvents);
app.get('/getMentorResources/:uid', handler.getMentorResources);
app.get('/getResources/:uid', handler.getMentorResources);
app.get('/getMenteeResources/:uid', handler.getMenteeResources);
app.get('/getQuestions/:uid', handler.getQuestions);
app.post('/postEvent', handler.postEvent);
app.post('/attendEvent', handler.attendEvent);
app.post('/postResource', handler.postResource);
app.post('/saveResource', handler.saveResource);
app.post('/postQuestion', handler.postQuestion);
app.post('/postReply', handler.postReply);
app.get('/*', handler.wildCard);

// authentication routes
authRouter(app);


var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});
