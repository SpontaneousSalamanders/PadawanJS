var dummyData = require('./dummyData.js')

module.exports = function(db) {
  return db.knex.schema.hasTable('mentors').then(function(exists) {
    if (!exists) {
      db.knex.schema.createTable('mentors', function(mentor) {
        mentor.increments('id').primary();
        mentor.string('name');
        mentor.string('location');
        mentor.string('picture');
        mentor.boolean('React');
        mentor.boolean('Angular');
        mentor.boolean('Backbone');
        mentor.boolean('Express');
        mentor.boolean('Redux');
        mentor.boolean('Authorization');
        mentor.boolean('TDD');
        mentor.boolean('Mocha/Chai');
        mentor.boolean('React Native');
        mentor.boolean('Node');
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
