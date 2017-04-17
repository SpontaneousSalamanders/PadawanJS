const passport = require('passport');
const User = require('./handleUser');
const config = require('./config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const db = require('../db')

// Create local strategy using email as the username

const localOptions = { usernameField: 'email', passwordField: 'password' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // check to see if the username exists
  db.knex('users').where({ email }).first()
  .then((user) => {
    if (!user) {
      return done(null, false);
    }

    // User.comparePass(password, user.password, function(err, isMatch) {
    //   if (err) { return done(err); }
    //   if (!isMatch) { return done(null, false);
    //   }
    //   // if credentials are valid, invoke done() to supply Passport with the
    //   // user that authenticated.
    //   return done(null, user);
    // })


    else {
      console.log('user', user, 'email', email, 'password', password, 'user email in db', user.email, 'user.password', user.password);
      return done(null, user);
    }
  })
  .catch((err) => { return done(err); });
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
