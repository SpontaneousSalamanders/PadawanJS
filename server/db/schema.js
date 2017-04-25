'use strict';

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
          table.string('description');
          table.string('role');
          table.string('picture').defaultTo('http://images.gotinder.com/0001unknown/640x640_pct_0_0_100_100_unknown.jpg');
          table.string('github');
          table.string('linkedIn');
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
          table.timestamp('created_at').defaultTo(db.knex.fn.now());
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
          table.timestamp('created_at').defaultTo(db.knex.fn.now());
        })
        .then((table) => {
          console.log('Created users_events table!');
        });
      }
    }),

    db.knex.schema.hasTable('categories').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('categories', (table) => {
          table.increments('id').primary();
          table.string('category');
          table.string('icon');
          table.string('image');
          table.string('location');
        })
        .then((table) => {
          console.log('Created categories table!');
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
          table.string('resource_category')/*.unsigned().references('category').inTable('categories');*/
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.integer('resource_id').unsigned().references('id').inTable('resources');
          table.timestamp('created_at').defaultTo(db.knex.fn.now());
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
          table.timestamp('created_at').defaultTo(db.knex.fn.now());
        })
        .then((table) => {
          console.log('Created users_resources table!');
        });
      }
    }),

    db.knex.schema.hasTable('messages').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('messages', (table) => {
          table.increments('id').primary();
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.string('title');
          table.string('message');
          table.integer('reply_to_message_id').unsigned().references('id').inTable('messages');
          table.integer('root_message_id').unsigned().references('id').inTable('messages');
          table.timestamp('created_at').defaultTo(db.knex.fn.now());
        })
        .then((table) => {
          console.log('Created messages table!');
        });
      }
    }),

    db.knex.schema.hasTable('conversations').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('conversations', (table) => {
          table.increments('id').primary();
          table.timestamp('created_at').defaultTo(db.knex.fn.now());
        })
        .then((table) => {
          console.log('Created conversations table!');
        });
      }
    }),

    db.knex.schema.hasTable('direct_messages').then((exists) => {
      if (!exists) {
        db.knex.schema.createTable('direct_messages', (table) => {
          table.increments('id').primary();
          table.integer('conversation_id').unsigned().references('id').inTable('conversations');
          table.integer('user_id').unsigned().references('id').inTable('users');
          table.string('direct_message');
          table.timestamp('created_at').defaultTo(db.knex.fn.now());
        })
        .then((table) => {
          console.log('Created direct_messages table!');
        });
      }
    })    

  ]);
};

module.exports = schema;
