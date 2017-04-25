'use strict'

const DirectMessages = require('../models/directMessages.js');

module.exports = (req, res) => {

  const user_profile_id = req.body.user_profile_id;
  const direct_message = req.body.message.direct_message;

  DirectMessages.startConversation()
  .then((conversation_id) => {
    console.log(conversation_id)
    DirectMessages.postDirectMessage(user_profile_id, {conversation_id, direct_message})
    .then( () => {
      res.status(200).end();
    })
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in startConversation': err
    });
  });
}