var db = require('./db/index.js');

var bcrypt = require('bcrypt');

// Before inserting a user, encrypt the password

function createUser (email, password, name) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return db.knex('users')
  .insert({
    email: email,
    password: hash,
    name: name
  })
  .returning('*');
}


function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

// check to see if email username is already in database
// if not, return false
// else, return the user
function checkUsernameInDB(email, password) {
  return db.knex('users').where({ email }).first()
    .then((user)) => {
      if( !user) return done(null, false);
      if( !comparepass(password, user.password)) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    })
    .catch((err) => { return done(err); })
}


module.exports = {
  comparePass,
  createUser,
  checkUsernameInDB
}