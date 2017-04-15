// Authentication route handlers
const auth = require ('../auth/controllers/authentication');

// Passport middle modele and setup
const passport = require('passport');
const passportStrategies = require('./passportStrategies');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

//Custom express routing middleware that checks to see if the authenticated user is an admin
const requireMentor = require('./requireMentor')

module.exports = function(app) {

  // using requireAuth passport middleware w/ jwt strategy to protect route


}
