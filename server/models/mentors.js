var db = require('../db');

module.exports.getMentors = function() {
  return db.knex
  .select()
  .from('mentors');
}
