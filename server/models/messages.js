const db = require('../db');

module.exports = {
  getQuestions: (user_id) => {
    return db.knex
    .select()
    .from('messages')
    .where({user_id: user_id});
  },

  postQuestion: (question) => {
    return db.knex('messages')
    .insert({
      user_id: question.user_id,
      title: question.title,
      message: question.message
    });
  },

  postReply: (reply) => {
    return db.knex('messages')
    .insert({
      user_id: reply.user_id,
      message: reply.message,
      reply_to_message_id: reply.reply_to_message_id
    });
  }
};
