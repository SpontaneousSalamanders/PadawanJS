'use strict';

const Messages = require('../models/messages.js');

module.exports = (req, res) => {
	// The message_id here is actually just the id of the message that is actually a question.
  const question_id = req.params.question_id;

  Messages.getMessagesForQuestion(question_id)
  .then((messages) => {
    res.status(200).send(messages);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getMessagesForQuestion': err});
  });
}
