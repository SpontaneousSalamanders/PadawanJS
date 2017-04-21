'use strict';

const Events = require('../models/events.js');

module.exports = (req, res) => {
  const event = req.body;

  Events.postEvent(event)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in postEvent': err});
  });
}
