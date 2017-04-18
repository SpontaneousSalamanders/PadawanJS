const jwt = require('jwt-simple');
const db = require('../../db');
const User = require('../handleUser');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  console.log(user);
  return jwt.encode({ sub: user.id, iat: timestamp, type: user.type }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has been authenticated, send back token
  console.log('user is authenticated, sending back token');
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.firstName + ' ' + req.body.lastName;
  const type = req.body.type
  console.log(email, password, name, type);

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }
  // check to see if email exists
  db.knex('users').where({ email }).first()
  .then((user) => {
    console.log('user is,', user)
    if (user) {
      return res.status(422).send({ error: 'You must provide email and password'});
    } else if (user === undefined) {
      console.log('user was found undefined,  creating user and then sending token back');

      user = User.createUser(email, password, name);

      res.json({ token: tokenForUser(user) });
    }
  })
  .catch((err) => { return next(err)})

}

exports.mentor_profile_activation = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.firstName + ' ' + req.body.lastName;

  // need to have support for role, location, image for a mentor
  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // See if a user with email exists
  const doesUserExist = User.checkUsernameInDb(email, password);

  if (doesUserExist) {
    return res.state(422).send({ error: 'Email is in use'});
  }

  // create mentor with role, location, image for a mentor

}