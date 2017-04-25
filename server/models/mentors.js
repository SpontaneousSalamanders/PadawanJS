'use strict';

const db = require('../db');

const getMentors = () => {
  return db.knex
  .select('users.id', 'users.name', 'users.location', 'users.role', 'users.picture', 'users.techStack', 'users.followers', 'categories.image')
  .from('users')
  .leftOuterJoin('categories', 'users.location', 'categories.location')
  .where({type: 'mentor'})
  .orderBy('users.id');
};

const getMentorProfile = (user_id) => {
  return db.knex
  .select()
  .from('users')
  .where({id: user_id})
  .first();
};

module.exports = {
  getMentors: getMentors,
  getMentorProfile: getMentorProfile
};
