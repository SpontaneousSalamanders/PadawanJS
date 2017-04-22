var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/index.js');
var handler = require('./routes/requestHandler.js');
var path = require('path');
var cors = require('cors');

// authentication routes
var authRouter = require('./routes/authRoutes.js')

const auth = require ('./auth/controllers/authentication');
const passport = require('passport');
const passportStrategies = require('./auth/passportStrategies.js');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const requireMentor = require('./auth/requireMentor')


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

app.get('/getMentors', handler.getMentors); // good
app.get('/getMentorProfile/:uid', handler.getMentorProfile); // good
app.get('/getEvents/:uid', handler.getEvents); //good
app.get('/getResources/:uid', handler.getMentorResources); // good
app.get('/getQuestions/:uid', handler.getQuestions); // good

app.get('/getMenteeResources', requireAuth, handler.getMenteeResources); // start
app.get('/getMenteeEvents', requireAuth, handler.getMenteeEvents); // start
app.post('/attendEvent', requireAuth, handler.attendEvent); // start
app.post('/saveResource', requireAuth, handler.saveResource); // start
app.post('/postReply', requireAuth, handler.postReply); // start

app.post('/postEvent', requireAuth, requireMentor, handler.postEvent); // start
app.post('/postResource', requireAuth, requireMentor, handler.postResource); // start
app.post('/postQuestion', requireAuth, requireMentor, handler.postQuestion); //

app.get('/*', handler.wildCard);

// authentication routes
authRouter(app);

var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});
