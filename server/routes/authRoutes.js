// Authentication route handlers
const auth = require ('../auth/controllers/authentication');

// var User = require ('../auth/handleUser.js');
// var db = require ('../db')

// Passport middle module and setup
const passport = require('passport');
const passportStrategies = require('../auth/passportStrategies.js');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

//Custom express routing middleware that checks to see if the authenticated user is a mentor
const requireMentor = require('../auth/requireMentor')

module.exports = function(app) {

  // using requireAuth passport middleware w/ jwt strategy to protect route

  app.get('/student_profile/', requireAuth, function(req, res) {
    res.send({ message: 'server response: this GET request has been authorized for a padawan' });
  });

  // using requireAuth passport middleware w/ jwt strategy as well as requireAdmin custom express middleware to protect route
  // must be a mentor to access mentor area

  app.get('/mentor_profile/', requireAuth, requireMentor, function(req, res, next) {
    res.send({ message: 'server response: this GET request has been authorized for a mentor' });
  })

  // using requireSignin passport middleware to authenticate for protected route using local (email/password) strategy)

  // Authentication.signin sends back JWT token to authenticated user

  app.post('/signin', requireSignin, auth.signin);


  // route for signing up user
  app.post('/signup', auth.signup);


  // using requireAuth passport middleware using jwt strategy as well as custom express middleware to protect route
  // took requireAuth out because id: payload.sub was giving an issue in stduent signup -> mentor sign up flow
  // route for signing up a mentor with mentor privileges

  app.post('/mentor_profile_activation', auth.mentor_profile_activation);

  app.post('/postResource', requireAuth, function(req, res) {
    console.log(req.user.id);
    res.end();
  });
}
