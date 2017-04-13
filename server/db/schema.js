const dummyData = require('./dummyData.js');

module.exports = (db) => {
  return db.knex.schema.hasTable('users').then((exists) => {
    if (!exists) {
      db.knex.schema.createTable('users', (user) => {
        user.increments('id').primary();
        user.string('type');
        user.string('name');
        user.string('email');
        user.string('location');
        user.string('role');
        user.string('picture');
        user.specificType('techStack', 'text[]');
      }).then((table) => {
        console.log('Created table!', table);
        return db.knex('users').insert(dummyData.users);
      }).catch((err) => {
        console.log('Error creating table', err);
      });

      db.knex.schema.hasTable('events').then((exists) => {
        if (!exists) {
          db.knex.schema.createTable('events', (event) => {
            event.increments('id').primary();
            event.integer('user_id').references('users.id');
            event.string('title');
            event.string('description');
            event.string('location');
            event.date('date');
            event.time('time');
          }).then((table) => {
            console.log('Created table!', table);
            db.knex.schema.hasTable('users_events').then((exists) => {
              if (!exists) {
                db.knex.schema.createTable('users_events', (user_event) => {
                  user_event.increments('id').primary();
                }).then((table) => {
                  console.log('Created table!', table);
                  return db.knex('events').insert(dummyData.events);
                }).catch((err) => {
                  console.log('Error creating table', err);
                });
              }
            });
          });
        }
      });

      db.knex.schema.hasTable('resources').then((exists) => {
        if (!exists) {
          db.knex.schema.createTable('resources', (resource) => {
            resource.increments('id').primary();
            resource.string('type');
            resource.string('title');
            resource.string('description');
            resource.string('URL');
            resource.specificType('tags', 'text[]');
            resource.integer('user_id').references('users.id');
            resource.integer('poster_id').references('resources.id');
          }).then((table) => {
            console.log('Created table!', table);
          }).catch((err) => {
            console.log('Error creating table', err);
          });
        }
      });
    }
  });
};
