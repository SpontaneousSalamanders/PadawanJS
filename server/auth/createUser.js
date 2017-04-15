var db = require('./db/index.js');

var bcrypt = require('bcrypt');

// Before inserting a user, encrypt the password

function createUser (req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.knex('users')
  .insert({
    email: req.body.email,
    password: hash
  })
  .returning('*');
}


function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

module.exports = {
  comparePass,
  createUser
}