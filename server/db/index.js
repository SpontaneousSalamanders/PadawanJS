var pg = require('pg');
var knex = require('knex');
var bookshelf = require('bookshelf');
var createSchema = require('./schema.js');

var knex = knex({
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

var db = bookshelf(knex);

createSchema(db);

module.exports = db;
