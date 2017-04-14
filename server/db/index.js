const pg = require('pg');
const Knex = require('knex');
const Bookshelf = require('bookshelf');
const createSchema = require('./schema.js');

const knex = Knex({
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: '127.0.0.1',
    port: 5432,
    user: '',
    password: '',
    database: 'padawanJS',
    charset: 'utf8'
  }
});

const db = Bookshelf(knex);

createSchema(db);

module.exports = db;
