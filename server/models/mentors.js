const db = require('../db');

module.exports = {
  getMentorProfile: (user_id) => {
    return db.knex
    .select()
    .from('users')
    .where({id: user_id})
    .first();
  },
  getMentors: () => {
    return db.knex
    .select('id', 'name', 'location', 'role', 'picture', 'techStack')
    .from('users')
    .where({type: 'mentor'});
  }
};
