var dummyData = require('./dummyData.js')

module.exports = function(db) {
  return db.knex.schema.hasTable('mentors').then(function(exists) {
    if (!exists) {
      db.knex.schema.createTable('mentors', function(mentor) {
        mentor.increments('id').primary();
        mentor.string('name');
        mentor.string('location');
        mentor.string('picture');
        mentor.specificType('techStack', 'text[]');
      }).then(function(table) {
        console.log('Created table!', table);
      }).then(function() {
        return db.knex('mentors').insert(dummyData);
      }).catch(function(err) {
        console.log('Error creating table', err);
      })
    }
  });
}
