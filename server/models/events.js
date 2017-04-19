const db = require('../db');

module.exports = {
  getEvents: (user_id) => {
    return db.knex
    .select()
    .from('events')
    .where({user_id: user_id});
  },

  postEvent: (event) => {
    return db.knex('events')
    .insert({
      user_id: event.user_id,
      title: event.title,
      description: event.description,
      location: event.location,
      date: event.date,
      time: event.time
    });
  },
};
