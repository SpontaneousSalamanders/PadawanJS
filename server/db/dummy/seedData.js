const db = require('../index.js');
const data = require('./data.js')

db.knex('users').insert(data.users)
.then(() => {
  return db.knex('events').insert(data.events);
})
.then(() => {
  return db.knex('resources').insert(data.resources);
});
