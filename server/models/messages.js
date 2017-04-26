'use strict';

const db = require('../db');

const getQuestions = (user_id) => {
  return db.knex.raw(`
    WITH RECURSIVE cte (name, id, message, reply_to_message_id)  AS (
      SELECT  users.name,
              messages.id,
              messages.message,
              messages.reply_to_message_id
      FROM    messages
      LEFT OUTER JOIN users ON users.id = messages.user_id
      WHERE   messages.user_id = ? AND messages.reply_to_message_id IS NULL

      UNION ALL

      SELECT  users.name,
              messages.id,
              messages.message,
              messages.reply_to_message_id
      FROM    messages
      LEFT OUTER JOIN users ON users.id = messages.user_id
      JOIN cte ON messages.reply_to_message_id = cte.id
      )
    SELECT name, id, message, reply_to_message_id FROM cte
    ORDER BY id;
  `, user_id)
  .then((messages) => {
    const nestedMessages = messages.rows;
    const nestedMessageMap = {};

    nestedMessages.forEach(nestedMessage => nestedMessageMap[nestedMessage.id] = nestedMessage);

    nestedMessages.forEach(nestedMessage => {
      if (nestedMessage.reply_to_message_id !== null) {
        const parent = nestedMessageMap[nestedMessage.reply_to_message_id];
        parent.children = parent.children || [];
        parent.children.push(nestedMessage);
      }
    });

    return nestedMessages.filter(nestedMessage => {
      return nestedMessage.reply_to_message_id === null;
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