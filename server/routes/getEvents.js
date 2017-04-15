const Events = require('../models/events.js');

module.exports = (req, res) => {
  Events.getEvents(req.params.uid)
  .then((events) => {
    res.status(200).send(events);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getEvents': err});
  });
}
