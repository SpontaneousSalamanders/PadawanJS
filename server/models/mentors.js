var db = require('../db');

var getMentors = function() {
  return db.knex.select().from('mentors');
}

module.exports = {
  getMentors: getMentors
}