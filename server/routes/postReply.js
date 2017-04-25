'use strict';

const Messages = require('../models/messages.js');

module.exports = (req, res) => {
  console.log('Reply', req.body)

  const user_id = req.user.id;
  const reply = req.body;

  Messages.postReply(user_id, reply)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in postReply': err});
  });
};
