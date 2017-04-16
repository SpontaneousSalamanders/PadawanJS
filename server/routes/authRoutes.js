// Authentication route handlers
const auth = require ('../auth/controllers/authentication');

// Passport middle module and setup
const passport = require('passport');
const passportStrategies = require('../auth/passportStrategies');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', function (req, res) {
  console.log('reaches server side')
  res.send('/')
});

//Custom express routing middleware that checks to see if the authenticated user is an admin
const requireMentor = require('../auth/requireMentor')

module.exports = function(app) {

  // using requireAuth passport middleware w/ jwt strategy to protect route

  app.get('/student_profile/id', requireAuth, function(req, res) {
    res.send({ message: 'server response: this GET request has been authorized for a padawan' });
  });

  // using requireAuth passport middleware w/ jwt strategy as well as requireAdmin custom express middleware to protect route
  // must be a mentor to access mentor area

  app.get('/mentor_profile/id', requireAuth, requireMentor, function(req, res, next) {
    res.send({ message: 'server response: this GET request has been authorized for a mentor' });
  })

  // using requireSignin passport middleware to authenticate for protected route using local (email/password) strategy)
  // Authentication.signin sends back JWT token to authenticated user
  app.post('/signin', requireSignin);

  // route for signing up user
  app.post('/signup', auth.signup);


  // using requireAuth passport middleware using jwt strategy as well as requireAdmin custom express middleware to protect route
  // must be an admin to activate another admin
  app.post('/mentor_profile_activation', requireAuth, requireMentor, auth.mentor_profile_activation);




}
