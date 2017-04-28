'use strict';

const Messages = require('../models/messages.js');

module.exports = (req, res) => {
  const user_id = req.params.uid ? req.params.uid : req.user.id;

  Messages.getQuestions(user_id)
  .then((messages) => {
    res.status(200).send(messages);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getQuestions': err});
  });
}
