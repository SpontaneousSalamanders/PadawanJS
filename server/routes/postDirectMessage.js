'use strict';

const DirectMessages = require('../models/directMessages.js');

module.exports = (req, res) => {
  const message = req.body;

  DirectMessages.postDirectMessage(message)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in postDirectMessage': err});
  });
}
