var pg = require('pg');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: '',
    password: '',
    database: 'padawanJS',
    charset: 'utf8'
  }
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('mentors').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('mentors', function (mentor) {
      mentor.string('id').primary();
      mentor.string('Name');
      mentor.string('Location');
      mentor.string('Picture');
      mentor.boolean('React');
      mentor.boolean('Angular');
      mentor.boolean('Backbone');
      mentor.boolean('Express');
      mentor.boolean('Redux');
      mentor.boolean('Mocha/Chai');
      mentor.boolean('TDD');
      mentor.boolean('Authorization');
      mentor.boolean('React Native');
    }).then(function(table) {
      console.log('Created table!', table);
    }).catch(function(err) {
      console.log('Error creating table!', err);
    })
  }
});

module.exports = db;
