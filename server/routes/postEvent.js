'use strict';
const jwt = require('jwt-simple');
const config = require('../auth/config.js');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  console.log('user in token', user);
  return jwt.encode({ sub: user.email, iat: timestamp, type: user.type }, config.secret);
}

const Events = require('../models/events.js');

module.exports = (req, res) => {
  const user_id = req.user.id;
  const event = req.body;

  Events.postEvent(user_id, event)
  .then(() => {
    console.log('being called inside postEvent to send token', req.user)
    res.send({token: tokenForUser(req.user) })
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in postEvent route': err});
  });
};
