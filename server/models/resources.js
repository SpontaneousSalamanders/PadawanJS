const db = require('../db');

module.exports = {
  getResources: (user_id) => {
    return db.knex
    .select('title', 'description', 'URL', 'icon')
    .from('resources')
    .where({user_id: user_id});
  },
  saveResources: (user_id, resource_id) => {

  }
};
