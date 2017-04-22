'use strict';

const Events = require('../models/events.js');

module.exports = (req, res) => {
  const user_id = req.user_id;
  const event_id = req.body.event_id;

  Events.attendEvent(user_id, event_id)
  .then((event) => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in attendEvent': err});
  });
}
