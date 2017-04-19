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

  postAnswer: (answer) => {
    return db.knex
    .insert({
      user_id: answer.user_id,
      message: answer.message,
      reply_to_message_id: answer.reply_to_message_id
    });
  }
};
