const db = require('../db');

module.exports = {
  getEvents: () => {
    return db.knex
    .select()
    .from('events')
  },
};
