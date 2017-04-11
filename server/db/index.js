var pg = require('pg');
var dummyData = require('./dummyData.js')

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
      mentor.string('name');
      mentor.string('location');
      mentor.string('picture');
      mentor.boolean('react');
      mentor.boolean('angular');
      mentor.boolean('backbone');
      mentor.boolean('express');
      mentor.boolean('redux');
      mentor.boolean('authorization');
      mentor.boolean('TDD');
      mentor.boolean('mocha/chai');
      mentor.boolean('react native');
      mentor.boolean('Node.js');
    }).then(function(table) {
      console.log('Created table!', table);
    }).then(function() {
      db.knex('mentors').insert({
        name: 'John'
      });
      console.log('mentor added!')
    }).catch(function(err) {
      console.log('Error creating table!', err);
    })
  }
});

module.exports = db;
