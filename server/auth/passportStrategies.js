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

    //compare passwords - is the password arg equal to user.password?

    User.comparePass(password, user.password, function(err, isMatch) {
      if (err) {
        return done(err); }
      if (!isMatch) { return done(null, false);
      }
      // if credentials are valid, invoke done() to supply Passport with the
      // user that authenticated.
      return done(null, user);
    })

    // manually create hash and insert it to the DB for dummy data

    // User.createHashAndInsertToDB (email, password);

    return done(null, user);


    // if above two don't work, uncomment this below for demo

    // else {
    //   console.log('user', user, 'email', email, 'password', password, 'user email in db', user.email, 'user.password', user.password);
    //   return done(null, user);
    // }
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
  console.log('what is payload sub?', payload.sub)
  db.knex('users').where({email: payload.sub}).first()
  .then((user) =>{
    if (user) {
      console.log('user id', user.id)
      return done (null, user);
    } else {
      return done (null, false);
    }
  })
});











// Tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);
