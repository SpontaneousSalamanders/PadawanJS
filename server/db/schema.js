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
  return Promise.all([
    db.knex.schema.hasTable('users').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('users', (table) => {
          table.increments('id').primary();
          table.string('type');
          table.string('name');
          table.string('email');
          table.string('location');
          table.string('role');
          table.string('picture');
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.specificType('techStack', 'text[]');
        })
        .then((table) => {
          console.log('Created users table!');
        });
      }
    }),

    db.knex.schema.hasTable('events').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('events', (table) => {
          table.increments('id').primary();
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.string('title');
          table.string('description');
          table.string('location');
          table.date('date');
          table.time('time');
        })
        .then((table) => {
          console.log('Created events table!');
        });
      }
    }),

    db.knex.schema.hasTable('users_events').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('users_events', (table) => {
          table.increments('id').primary();
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.integer('event_id').unsigned().references('id').inTable('events');
        })
        .then((table) => {
          console.log('Created users_events table!');
        });
      }
    }),

    db.knex.schema.hasTable('resources').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('resources', (table) => {
          table.increments('id').primary();
          table.string('type');
          table.string('title');
          table.string('description');
          table.string('URL');
          table.string('icon');
          table.specificType('tags', 'text[]');
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.integer('resource_id').unsigned().references('id').inTable('resources');
        })
        .then((table) => {
          console.log('Created resources table!');
        });
      }
    }),

    db.knex.schema.hasTable('users_resources').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('users_resources', (table) => {
          table.increments('id').primary();
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.integer('resource_id').unsigned().references('id').inTable('resources');
        })
        .then((table) => {
          console.log('Created users_resources table!');
        });
      }
    }),

    db.knex.schema.hasTable('tags').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('tags', (table) => {
          table.increments('id').primary();
        })
        .then((table) => {
          console.log('Created tags table!');
        });
      }
    })
  ]);
};

module.exports = schema;
