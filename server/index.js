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
// app.get('/', function(req, res) {
//   res.sendFile(__dirname, + '/../client/dist')
// })

app.get('/getMentors', handler.getMentors);
app.get('/getMentorProfile/:uid', handler.getMentorProfile);
app.get('/getEvents/:uid', handler.getEvents);
app.get('/getResources/:uid', handler.getMentorResources);
app.get('/getMenteeResources/:uid', handler.getMenteeResources);
app.get('/getQuestions/:uid', handler.getQuestions);
app.get('/getMenteeResources', requireAuth, handler.getMenteeResources);
app.get('/getMenteeResources', handler.getMenteeResources);
app.get('/getMenteeEvents', requireAuth, handler.getMenteeEvents);
app.post('/attendEvent', requireAuth, handler.attendEvent);
app.post('/saveResource', requireAuth, handler.saveResource);
app.post('/postReply', requireAuth, handler.postReply);
app.post('/postEvent', requireAuth, requireMentor, handler.postEvent);
app.post('/postResource', requireAuth, requireMentor, handler.postResource);
app.post('/postQuestion', requireAuth, requireMentor, handler.postQuestion);
app.post('/directMessage', requireAuth, handler.postDirectMessage);
app.post('startConversation', handler.startConversation, handler.postDirectMessage);
app.get('/conversation/:uid', requireAuth, handler.getConversation);
app.get('/allConversations/', requireAuth, handler.getAllConversations);
app.get('/getMessagesForQuestion/:question_id', handler.getMessagesForQuestion)
app.post('/deleteSavedEvent', requireAuth, handler.deleteSavedEvent);
app.post('/deleteSavedResource', requireAuth, handler.deleteSavedResource);

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'))
})

// authentication routes
authRouter(app);

var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});
