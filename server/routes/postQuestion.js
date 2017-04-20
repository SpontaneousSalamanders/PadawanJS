'use strict';

const Messages = require('../models/messages.js');

module.exports = (req, res) => {
  const question = req.body;

  Messages.postQuestion(question)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in postQuestion': err});
  });
}
