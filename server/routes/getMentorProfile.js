'use strict';

const Mentors = require('../models/mentors.js');

module.exports = (req, res) => {
  const user_id = req.params.uid;

  Mentors.getMentorProfile(user_id)
  .then((mentor) => {
    res.status(200).send(mentor);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getMentor': err});
  });
}
