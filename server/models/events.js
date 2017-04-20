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

  attendEvent: (user_id, event_id) => {
    return db.knex('users_events')
    .insert({
      user_id: user_id,
      event_id: event_id
    });
  },

  getMenteeEvents: (user_id) => {
    return db.knex
    .select()
    .from('events')
    .innerJoin('users_events', function() {
      this.on('users_events.user_id', '=', Number(user_id))
      .andOn('events.id', '=', 'users_events.event_id');
    });
  }
};

  // getMenteeEvents: (event_id) => {
  //   return db.knex
  //   .select()
  //   .from('users')
  //   .innerJoin('users_events', function() {
  //     this
  //     .on('users_events.event_id', '=', Number(event_id))
  //     .andOn('users_events.user_id', '=', 'users.id');
  //   });
  // }
