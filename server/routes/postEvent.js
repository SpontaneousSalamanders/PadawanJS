'use strict';

const Events = require('../models/events.js');

module.exports = (req, res) => {
  const user_id = req.user.id;
  const event = req.body;

  Events.postEvent(user_id, event)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in postEvent': err});
  });
};
