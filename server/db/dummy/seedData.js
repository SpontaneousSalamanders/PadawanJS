const db = require('../index.js');

const users = require('./users.js').users;
const events = require('./events.js').events;
const resources = require('./resources.js').resources;
const users_events = require('./events.js').users_events;
const users_resources = require('./resources.js').users_resources;
const categories = require('./categories.js').categories;
const messages = require('./messages.js').messages;
const direct_messages = require('./directMessages.js').direct_messages;
const conversations = require('./directMessages.js').conversations;

const seedData = (db) => {
  return db.knex.schema.hasTable('users')
  .then(() => {
    return db.knex('users').insert(users);
  })
  .then(() => {
    return db.knex('events').insert(events);
  })
  .then(() => {
    return db.knex('categories').insert(categories);
  })
  .then(() => {
    return db.knex('resources').insert(resources);
  })
  .then(() => {
    return db.knex('users_events').insert(users_events);
  })
  .then(() => {
    return db.knex('users_resources').insert(users_resources);
  })
  .then(() => {
    return db.knex('messages').insert(messages);
  })
  .then(() => {
    return db.knex('conversations').insert(conversations);
  })
  .then(() => {
    return db.knex('direct_messages').insert(direct_messages);
  })
  .catch((err)=> {
  	console.log(err)
  })
}

module.exports = seedData;
