'use strict';

const db = require('../db');

const getConversation = (conversation_id) => {
  return db.knex
  .select()
  .from('direct_messages')
  .innerJoin('conversations', function() {
    this.on('conversations.id', '=', 'direct_messages.conversation_id')
    .andOn('direct_messages.conversation_id', '=', Number(conversation_id));
  })
};

const postDirectMessage = (direct_message) => {
  return db.knex('direct_messages')
  .insert({
    users_id: direct_message.users_id,
    conversation_id: direct_message.conversation_id,
    direct_message: direct_message.direct_message,
  });
};

module.exports = {
  getConversation: getConversation,
  postDirectMessage: postDirectMessage,
};
