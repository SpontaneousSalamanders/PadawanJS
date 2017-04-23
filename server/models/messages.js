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

  // return db.knex.raw(`
  //   WITH RECURSIVE cte (id, message, path, reply_to_message_id, depth)  AS (
  //     SELECT  id,
  //             message,
  //             array[id] AS path,
  //             reply_to_message_id,
  //             1 AS depth
  //     FROM    messages
  //     WHERE   user_id = ? AND reply_to_message_id IS NULL

  //     SELECT  messages.id,
  //             messages.message,
  //             cte.path || messages.id,
  //             messages.reply_to_message_id,
  //             cte.depth + 1 AS depth
  //     FROM    messages
  //     JOIN cte ON messages.reply_to_message_id = cte.id
  //     )
  //     SELECT id, message, path, depth FROM cte
  //     ORDER BY path;
  // `, user_id);

  // return db.knex.raw(`
  //   WITH RECURSIVE cte (name, id, message, path, reply_to_message_id, depth)  AS (
  //     SELECT  users.name,
  //             messages.id,
  //             messages.message,
  //             array[messages.id] AS path,
  //             messages.reply_to_message_id,
  //             1 AS depth
  //     FROM    messages
  //     JOIN    users ON users.id = messages.user_id
  //     WHERE   messages.user_id = ? AND messages.reply_to_message_id IS NULL

  //     UNION ALL

  //     SELECT  users.name,
  //             messages.id,
  //             messages.message,
  //             cte.path || messages.id,
  //             messages.reply_to_message_id,
  //             cte.depth + 1 AS depth
  //     FROM    messages
  //     JOIN    users ON users.id = messages.user_id
  //     JOIN cte ON messages.reply_to_message_id = cte.id
  //     )
  //     SELECT name, id, message, path, depth FROM cte
  //     ORDER BY path;
  // `, user_id)

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