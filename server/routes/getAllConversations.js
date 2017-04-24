'use strict';

const DirectMessages = require('../models/directMessages.js');

module.exports = (req, res) => {
  const user_id = req.user.id;

  DirectMessages.getAllConversations(user_id)
  .then((conversations) => {
    res.status(200).send(conversations);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getAllConversations': err});
  });
}
