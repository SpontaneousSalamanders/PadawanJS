const db = require('../db');

module.exports.getMentors = () => {
  return db.knex
  .select()
  .from('mentors');
}
