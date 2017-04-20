'use strict';

const Events = require('../models/events.js');

module.exports = (req, res) => {
  const user_id = req.params.uid;
  const event_id = req.body.event_id;

  Events.attendEvent(user_id)
  .then((event) => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in attendEvent': err});
  });
}
