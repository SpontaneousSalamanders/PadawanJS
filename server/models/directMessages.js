'use strict';

const db = require('../db');


const getConversation = (conversation_id) => {
  console.log('db conversation_id', conversation_id)
  return db.knex
  .select()
  .from('direct_messages')
  .innerJoin('conversations', function() {
    this.on('conversations.id', '=', 'direct_messages.conversation_id')
    .andOn('direct_messages.conversation_id', '=', Number(conversation_id));
  })
};

const getConversationWithNames = (conversation_id) => {
  return getConversation(conversation_id).map( (message) => {
    return db.knex
    .distinct('name', 'picture')
    .from('users')
    .innerJoin('direct_messages', function() {
      this.on('direct_messages.user_id', "=", 'users.id')
    .andOn('users.id', '=', message.user_id)
    })
    .then((info) =>{
      return {
        user: info,
        message: message
      }
    })
  })
}

const getAllConversations = (user_id) => {
  return db.knex
  .distinct('conversations.id')
  .from('direct_messages')
  .innerJoin('conversations', function() {
    this.on('conversations.id', '=', 'direct_messages.conversation_id')
    .andOn('direct_messages.user_id', '=', Number(user_id))
  }).map((conversations) => {
    return getConversation(conversations.id)
    .then((convos) => {
      var filtered = convos.filter((convo) => {
        return convo.user_id !== Number(user_id);
      })
      var mostRecentUser = filtered[filtered.length - 1].user_id
      return db.knex
      .select('users.name', 'users.picture')
      .from('users')
      .where({id: mostRecentUser})
      .then((info) => {
        return {
          lastMessage: convos[convos.length - 1],
          recentUser: info
        };
      })
      })
    })
};

const startConversation = () => {
  return db.knex('conversations').insert({})
  .then( () => {
    return db.knex.select('id')
    .from('conversations')
    .orderBy('created_at', 'desc')
    .limit(1);
  })
}

const postDirectMessage = (user_id, direct_message) => {
  return db.knex('direct_messages')
  .insert({
    user_id: user_id,
    conversation_id: direct_message.conversation_id,
    direct_message: direct_message.direct_message,
  })
  .then( () => {
    console.log('direct message conversation id', direct_message.conversation_id);

    // getConversation(direct_message.conversation_id)
  return getConversation(direct_message.conversation_id).map( (message) => {
    return db.knex
    .distinct('name', 'picture')
    .from('users')
    .innerJoin('direct_messages', function() {
      this.on('direct_messages.user_id', "=", 'users.id')
    .andOn('users.id', '=', message.user_id)
    })
    .then((info) =>{
      return {
        user: info,
        message: message
      }
    })
  })

  })
};

module.exports = {
  startConversation: startConversation,
  getConversation: getConversation,
  getConversationWithNames: getConversationWithNames,
  getAllConversations: getAllConversations,
  postDirectMessage: postDirectMessage,
};
