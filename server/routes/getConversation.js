'use strict';

const DirectMessages = require('../models/directMessages.js');

module.exports = (req, res) => {
  const user_id = req.params.uid;

  DirectMessages.getConversationWithNames(user_id)
  .then((conversation) => {
    console.log('db getConversation: ',conversation)
    res.status(200).send(conversation);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getConversation': err});
  });
}
