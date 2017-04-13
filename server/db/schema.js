var dummyData = require('./dummyData.js')

module.exports = function(db) {
  return db.knex.schema.hasTable('mentors').then(function(exists) {
    if (!exists) {
      db.knex.schema.createTable('mentors', function(mentor) {
        mentor.increments('id').primary();
        mentor.string('name');
        mentor.string('location');
        mentor.string('role');
        mentor.string('picture');
        mentor.specificType('techStack', 'text[]');
      }).then(function(table) {
        console.log('Created table!', table);
      })

      db.knex.schema.hasTable('events').then(function(exists) {
        if (!exists) {
          db.knex.schema.createTable('events', function(event) {
            event.increments('id').primary();
          }).then(function(table) {
            console.log('Created table!', table);
            db.knex.schema.hasTable('users_events').then(function(exists) {
              if (!exists) {
                db.knex.schema.createTable('users_events', function(user_event) {
                  user_event.increments('id').primary();
                }).then(function(table) {
                  console.log('Created table!', table);
                  return db.knex('mentors').insert(dummyData);
                }).catch(function(err) {
                  console.log('Error creating table', err);
                })
              }
            })
          })
        }
      })

      db.knex.schema.hasTable('resources').then(function(exists) {
        if (!exists) {
          db.knex.schema.createTable('resources', function(resource) {
            resource.increments('id').primary();
          }).then(function(table) {
            console.log('Created table!', table);
          })
        }
      })
    }
  });
}

// resources table

// primary_id
// type (post, save)
// user_id
// link
// title
// description
// link
// tag
// bookmark_id = primary_id
