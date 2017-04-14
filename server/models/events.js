const db = require('../db');

module.exports = {
  getEvents: (user_id) => {
    return db.knex
    .select()
    .from('events')
    .where({user_id: user_id})
  },
};
