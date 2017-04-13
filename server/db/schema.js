var dummyData = require('./dummyData.js')

module.exports = function(db) {
  return db.knex.schema.hasTable('mentors').then(function(exists) {
    if (!exists) {
      db.knex.schema.createTable('mentors', function(mentor) {
        mentor.increments('id').primary();
        mentor.string('name');
        // email address
        mentor.string('location');
        mentor.string('role');
        mentor.string('picture');
        mentor.specificType('techStack', 'text[]');
      }).then(function(table) {
        console.log('Created table!', table);
        return db.knex('mentors').insert(dummyData);
      }).catch(function(err) {
        console.log('Error creating table', err);
      })

      db.knex.schema.hasTable('events').then(function(exists) {
        if (!exists) {
          db.knex.schema.createTable('events', function(event) {
            event.increments('id').primary();
            // event owner
            event.string('title');
            event.string('description');
            event.string('location');
            event.date('date');
            event.ime('time');
          }).then(function(table) {
            console.log('Created table!', table);
            db.knex.schema.hasTable('users_events').then(function(exists) {
              if (!exists) {
                db.knex.schema.createTable('users_events', function(user_event) {
                  user_event.increments('id').primary();
                }).then(function(table) {
                  console.log('Created table!', table);
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
            resource.string('type');
            resource.string('title');
            resource.string('description');
            resource.string('URL');
            resource.specificType('tags', 'text[]');
            // user_id (foreign key)
            // bookmark_id = primary_id
          }).then(function(table) {
            console.log('Created table!', table);
          }).catch(function(err) {
            console.log('Error creating table', err);
          })
        }
      })
    }
  });
}
