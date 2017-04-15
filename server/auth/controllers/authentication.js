const jwt = require('jwt-simple');
const createUser = require('./createUser');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp, role: user.role }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has been authenticated, send back token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.firstName + ' ' + req.body.lastName;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  createUser(email, password, name);