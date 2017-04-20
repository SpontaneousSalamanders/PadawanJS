const db = require('../db');

module.exports = {
  getMentorResources: (user_id) => {
    return db.knex
    .select('title', 'description', 'URL', 'icon')
    .from('resources')
    .where({user_id: user_id})
    .orderBy('created_at')
  },

  getMenteeResources: (user_id) => {
    return db.knex
    .select()
    .from('users')
    .innerJoin('users_resources', function() {
      this
      .on('users_resources.user_id', '=', Number(user_id))
      .andOn('resources.id', '=', 'users_resources.resource_id');
    });
  },

  postResource: (resource) => {
    return db.knex('resources')
    .insert({
      user_id: resource.user_id,
      title: resource.title,
      description: resource.description,
      URL: resource.url,
      category: resource.category
    });
  },

  saveResource: (user_id, resource_id) => {
    return db.knex('users_resources')
    .insert({
      user_id: user_id,
      resource_id: resource_id
    });
  }
};
