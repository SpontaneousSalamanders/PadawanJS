const jwt = require('jwt-simple');
const db = require('../../db');
const User = require('../handleUser');
const config = require('../config.js');

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
  const type = req.body.type;
  console.log(email, password, name, type);

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }
  // check to see if email exists
  db.knex('users').where({ email }).first()
  .then((user) => {
    console.log('user is', user)
    if (user) {
      return res.status(422).send({ error: 'Email is in use'});
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
  const role = req.body.role;
  const location = req.body.location;
  const techStack = req.body.techStack;
  const type = 'mentor';


  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // find user in the database and update his role to mentor
  db.knex('users').where({ email }).first()
    .update({
      type: 'mentor',
      role: role,
      location: location,
      techStack: techStack,
    })
    .then(() => {
      console.log('mentor updated in type');
    })
    .catch((err) => { return next(err)})

}