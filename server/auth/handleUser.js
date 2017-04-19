// You can even use knex without a connection, just for its query building features. Just pass in an empty object when initializing the library. Specify a client if you are interested in a particular flavour of SQL.

var db = require('../db');
var bcrypt = require('bcryptjs');

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

function createMentor (email, password, name, type = mentor, role, location, techStack) {
  console.log('inside create Mentor!!');
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return db.knex('users').insert({
    email: email,
    password: hash,
    name: name,
    type: 'mentor',
    role: role,
    location: location,
    techStack: techStack
  })
  .returning('*')
  .then( () => {
    console.log('mentor created in handleUser')
  })
  .catch( (err) => console.log(err) );
}


function createHashAndInsertToDB (email, password) {
  console.log('before hash')
  console.log('inside create User!!');
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return db.knex('users').where('email', email)
  .update({
    password: hash
  })
  .then( () => {
    console.log ('hash inserted in db');
  })
  .catch( (err) => console.log('err', err) );
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



module.exports = {
  comparePass,
  createUser,
  createMentor,
  createHashAndInsertToDB
}