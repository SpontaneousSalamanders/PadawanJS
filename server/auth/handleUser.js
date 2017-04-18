// You can even use knex without a connection, just for its query building features. Just pass in an empty object when initializing the library. Specify a client if you are interested in a particular flavour of SQL.

var db = require('../db');
var bcrypt = require('bcrypt');

// var knex = require('knex');
// var pg = require('knex')({client: 'pg'});

// Before inserting a user, encrypt the password

function createUser (email, password, name) {
  console.log('inside create User!!');
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return db.knex('users').insert({
    email: email,
    password: hash,
    name: name,
    type: 'padawan'
  })
  .returning('*')
  .then( () => {
    console.log('fulfilled')
  })
  .catch( (err) => console.log(err) );
}


function createHashAndInsertToDB (email, password) {
  console.log('before hash')
  bcrypt.hash(password, 10, function(err, hash) {
    // store hash to DB
    console.log('inside hash', hash)
    db.knex('users').where('email', email)
    .update({
      password: hash
    })
    console.log('updated:', db.knex('users').where('email', email).select('password'));
  });
}


function comparePass (userPassword, databasePassword, callback) {
  bcrypt.compare(userPassword, databasePassword, function(err, isMatch) {
    console.log(userPassword, databasePassword);
    if (err) {
      return callback(err); }

    console.log('isMatch', isMatch);
    callback(null, isMatch);
  });
}

// check to see if email username is already in database
// if not, return false
// else, return the user

function doesUserAlreadyExist (email) {
  db.knex('users').where({ email }).first()
  .then((user) => {
    if (!user) {
      return user;
    }


    console.log('USER SHOULD ALREADY EXIST?!', user);
    if (user) {
      return true;
    } else {
      return false;
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
  doesUserAlreadyExist,
  checkIdInDB,
  createHashAndInsertToDB
}