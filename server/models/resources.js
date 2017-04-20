const db = require('../db');

module.exports = {
  getMentorResources: (user_id) => {
    return db.knex
    .select()
    .from('resources')
    .leftJoin('categories', 'resources.category_id', 'categories.id')
    .where({user_id: user_id})
    .orderBy('created_at');
  },

  getMenteeResources: (user_id) => {
    return db.knex
    .select()
    .from('resources')
    .innerJoin('users_resources', function() {
      this.on('users_resources.user_id', '=', Number(user_id))
      .andOn('resources.id', '=', 'users_resources.resource_id');
    })
    .orderBy('created_at');
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
