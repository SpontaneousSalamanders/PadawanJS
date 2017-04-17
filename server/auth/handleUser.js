// You can even use knex without a connection, just for its query building features. Just pass in an empty object when initializing the library. Specify a client if you are interested in a particular flavour of SQL.

var db = require('../db');
var bcrypt = require('bcrypt');

// var knex = require('knex');
// var pg = require('knex')({client: 'pg'});

// Before inserting a user, encrypt the password

function createUser (email, password, name) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return db.knex('users').insert({
    email: email,
    password: hash,
    name: name
  })
  .returning('*');
}


function createHashAndInsertToDB (email, password) {
  console.log('before hash')
  bcrypt.hash(password, 10, function(err, hash) {
    // store hash to DB
    console.log('inside hash', hash)
    db.knex('users').where({ email }).first()
    .update({
      password: hash
    })
  });
}


function comparePass (userPassword, databasePassword) {
  bcrypt.compare(userPassword, databasePassword, function(err, isMatch) {
    if (err) { return
      callback(err); }

    callback(null, isMatch);
  });
}

// check to see if email username is already in database
// if not, return false
// else, return the user
function checkUsernameInDB (email, password, done) {
  db.knex('users').where({ email }).first()
  .then((user) => {
    if(!user) return done(null, false);
    if(!comparePass(password, user.password)) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  })
  .catch((err) => { return done(err); })
}




function checkIdInDB(id) {
  return db.knex('users').where({ id }).first()
  .then((user) => {
    if (!user) return done (null, false);
    else {
      return done (null, user);
    }
  })
}


module.exports = {
  comparePass,
  createUser,
  checkUsernameInDB,
  checkIdInDB,
  createHashAndInsertToDB
}