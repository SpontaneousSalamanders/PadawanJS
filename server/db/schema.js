const dummyData = require('./dummyData.js');

module.exports = (db) => {
  return db.knex.schema.hasTable('users').then((exists) => {
    if (!exists) {
      db.knex.schema.createTable('users', (user) => {
        user.increments('id').primary();
        user.string('type');
        user.string('name');
        user.string('email');
        user.string('password');
        user.string('location');
        user.string('role');
        user.string('picture');
        user.integer('user_id').references('users.id'); // assigned mentor
        user.specificType('techStack', 'text[]');
      }).then((table) => {
        console.log('Created table!', table);
        return db.knex('users').insert(dummyData.users);
      }).catch((err) => {
        console.log('Error creating table', err);
      });

const schema = (db) => {
  return db.knex.schema

  .createTableIfNotExists('users', (users) => {
    users.increments('id').primary();
    users.string('type');
    users.string('name');
    users.string('email');
    users.string('location');
    users.string('role');
    users.string('picture');
    users.integer('user_id').references('users.id'); // assigned mentor
    users.specificType('techStack', 'text[]');
  })

  .createTableIfNotExists('events', (events) => {
    events.increments('id').primary();
    events.integer('user_id').unsigned().references('users.id'); // owner
    events.string('title');
    events.string('description');
    events.string('location');
    events.date('date');
    events.time('time');
  })

  .createTableIfNotExists('users_events', (users_events) => {
    users_events.increments('id').primary();
    users_events.integer('user_id').unsigned().references('users.id');
    users_events.integer('event_id').unsigned().references('events.id');
  })

  .createTableIfNotExists('resources', (resources) => {
    resources.increments('id').primary();
    resources.string('type');
    resources.string('title');
    resources.string('description');
    resources.string('URL');
    resources.string('icon');
    resources.specificType('tags', 'text[]');
    resources.integer('user_id').unsigned().references('users.id'); // user
    resources.integer('resource_id').unsigned().references('resources.id'); // poster
  })

  .then((tables) => {
    console.log('Created tables!', tables);
  })
  .catch((err) => {
    console.log('Error creating tables', err);
  })
  .then(() => {
    return db.knex('users').insert(dummyData.users);
  })
  .then(() => {
    return db.knex('events').insert(dummyData.events);
  })
  .then(() => {
    return db.knex('resources').insert(dummyData.resources);
  });
}

module.exports = schema;
