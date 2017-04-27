'use strict';

const DirectMessages = require('../models/directMessages.js');

module.exports = (req, res) => {

  const mentor_id = req.body.mentor_id;
  console.log('mentor_id is:', mentor_id)
  const direct_message = { direct_message: 'Hello! Ask me anything.' }

  DirectMessages.startConversation()
  .then((conversation_id) => {
    console.log('is this working in start Conversation?',conversation_id[0].id);
    direct_message["conversation_id"] = conversation_id[0].id;

    DirectMessages.postDirectMessage(mentor_id, direct_message)
    .then( () => {
      DirectMessages.getConversation(conversation_id[0].id)
      .then( (conversation) => {
        res.status(200).send(conversation);
      })
    })
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in startConversation': err
    });
  });
}

// res.status(200).send({conversation_id: conversation_id[0].id});