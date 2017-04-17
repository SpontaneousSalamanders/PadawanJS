const db = require('../db');

module.exports = {
  getMentors: () => {
    return db.knex
    .select('id', 'name', 'location', 'role', 'picture', 'techStack')
    .from('users')
    .where({type: 'mentor'});
  },

  getMentorProfile: (user_id) => {
    return db.knex
    .select()
    .from('users')
    .where({id: user_id})
    .first();
  }
};
