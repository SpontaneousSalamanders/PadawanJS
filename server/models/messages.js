'use strict';

const db = require('../db');

const getQuestions = (user_id) => {
  return db.knex.raw(`
    WITH RECURSIVE cte (id, message, path, reply_to_message_id, depth)  AS (
      SELECT  id,
              message,
              array[id] AS path,
              reply_to_message_id,
              1 AS depth
      FROM    messages
      WHERE   user_id = @user_id

      UNION ALL

      SELECT  messages.id,
              messages.message,
              cte.path || messages.id,
              messages.reply_to_message_id,
              cte.depth + 1 AS depth
      FROM    messages
      JOIN cte ON messages.reply_to_message_id = cte.id
      )
      SELECT id, message, path, depth FROM cte
      ORDER BY path;
  `);
};

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
  postQuestion: postQuestion,
  postReply: postReply
};
