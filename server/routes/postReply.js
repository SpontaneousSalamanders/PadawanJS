'use strict';

const Messages = require('../models/messages.js');

module.exports = (req, res) => {
  const reply = req.body;

  Messages.postReply(reply)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in postReply': err});
  });
}
