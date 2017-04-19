'use strict';

const Mentors = require('../models/mentors.js');

module.exports = (req, res) => {
  Mentors.getMentors()
  .then((mentors) => {
    res.status(200).send(mentors);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getMentors': err});
  });
}
