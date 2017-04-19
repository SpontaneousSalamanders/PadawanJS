'use strict';

const Messages = require('../models/messages.js');

module.exports = (req, res) => {
  const user_id = req.params.uid;

  Messages.getQuestions(user_id)
  .then((questions) => {
    res.status(200).send(questions);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getQuestions': err});
  });
}
