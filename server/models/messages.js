'use strict';

const db = require('../db');

const getQuestions = (user_id) => {
  return db.knex.raw(`
    WITH RECURSIVE cte (name, picture, id, message, reply_to_message_id, created_at)  AS (
      SELECT  users.name,
              users.picture,
              messages.id,
              messages.message,
              messages.reply_to_message_id,
              messages.created_at
      FROM    messages
      LEFT OUTER JOIN users ON users.id = messages.user_id
      WHERE   messages.user_id = ? AND messages.reply_to_message_id IS NULL

      UNION ALL

      SELECT  users.name,
              users.picture,
              messages.id,
              messages.message,
              messages.reply_to_message_id,
              messages.created_at
      FROM    messages
      LEFT OUTER JOIN users ON users.id = messages.user_id
      JOIN cte ON messages.reply_to_message_id = cte.id
      )
    SELECT name, picture, id, message, reply_to_message_id, created_at FROM cte
    ORDER BY created_at DESC;
  `, user_id)
  .then((messageList) => {
    const messages = messageList.rows;
    const messageMap = {};

    messages.forEach(message => messageMap[message.id] = message);

    messages.forEach(message => {
      if (message.reply_to_message_id !== null) {
        const parent = messageMap[message.reply_to_message_id];
        parent.children = parent.children || [];
        parent.children.push(message);
      }
    });

    return messages.filter(message => {
      return message.reply_to_message_id === null;
    });
  })
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