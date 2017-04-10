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
      mentor.boolean('React');
      mentor.boolean('Angular');
      mentor.boolean('Backbone');
      mentor.boolean('Express');
      mentor.boolean('Redux');
      mentor.boolean('Mocha/Chai');
      mentor.boolean('TDD');
      mentor.boolean('Authorization');
      mentor.boolean('React Native');
      mentor.string('Front-end');
      mentor.string('Back-end');
      mentor.string('Full-stack');
      mentor.string('San Francisco');
      mentor.string('San Jose');
      mentor.string('Palo Alto');
    }).then(function(table) {
      console.log('Created table!', table);
    }).catch(function(err) {
      console.log('Error!', err);
    })
  }
});

module.exports = db;
