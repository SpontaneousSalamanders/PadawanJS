'use strict';

const db = require('../db');

const getQuestions = (user_id) => {
  // This is because all questions are where there is no reply_to_message_id
  // or root_message_id
  return db.knex
  .select()
  .from('messages')
  .where({ user_id: user_id })
  .whereNull('reply_to_message_id')
  .whereNull('root_message_id')
  .orderBy('id');
};

const getMessagesForQuestion = (root_message_id) => {
  // The root message id here should be the "question" message id

  return db.knex('messages')
  .select(['messages.*', 'users.name as author'])
  .leftJoin("users", 'messages.user_id', 'users.id')
  .where({ root_message_id: root_message_id })
  .orderBy('id')
}

const postQuestion = (user_id, question) => {
  return db.knex('messages')
  .insert({
    user_id: user_id,
    title: question.title,
    message: question.message
  });
};

const postReply = (user_id, reply) => {
  return db.knex('messages')
  .insert({
    user_id: user_id,
    message: reply.message,
    reply_to_message_id: reply.reply_to_message_id,
    root_message_id: reply.root_message_id
  });
};

module.exports = {
  getQuestions: getQuestions,
  getMessagesForQuestion: getMessagesForQuestion,
  postQuestion: postQuestion,
  postReply: postReply
};