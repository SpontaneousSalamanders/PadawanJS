const Events = require('../models/events.js');

module.exports = (req, res) => {
  Events.getEvents(req.params.uid)
  .then((events) => {
    res.status(200).send(events);
  })
  .catch((error) => {
    res.status(error.status || 500).send({'error in getEvents': error});
  });
}
