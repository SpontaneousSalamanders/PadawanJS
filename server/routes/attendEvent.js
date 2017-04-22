'use strict';

const Events = require('../models/events.js');

module.exports = (req, res) => {
  const user_id = req.user.id;
  const event_id = req.body.id;

  Events.attendEvent(user_id, event_id)
  .then((event) => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in attendEvent': err});
  });
}
