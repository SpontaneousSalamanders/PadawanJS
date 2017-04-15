const passport = require('passport');
const User = require('./handleUser');
const config = require('./config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


// Create local strategy using email as the username

const localOptions = { email: 'email' };

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  User.checkUsernameInDB(email, password, done)
  // if credentials are valid, invoke done() to supply Passport with the
  // user that authenticated.
  return done(null, user);
});

// Create JWT Strategy

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that other
  // otherwise, call done without a user object
  User.checkIdInDB(payload.sub)
});











// Tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);