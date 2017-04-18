const seedData = require('./dummy/seedData.js')

const schema = (db) => {
  return Promise.all([
    db.knex.schema.hasTable('users').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('users', (table) => {
          table.increments('id').primary();
          table.string('type');
          table.string('name');
          table.string('email');
          table.string('password');
          table.string('location');
          table.string('role');
          table.string('picture');
          table.integer('followers');
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
          table.string('category');
          // table.specificType('tags', 'text[]');
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

    db.knex.schema.hasTable('categories').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('categories', (table) => {
          table.increments('id').primary();
          table.string('category');
          table.string('picture');
        })
        .then((table) => {
          console.log('Created categories table!');
        });
      }
    }),

    seedData(db)
  ]);
};

module.exports = schema;
