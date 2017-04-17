const Mentors = require('../models/mentors.js');

module.exports = (req, res) => {
  Mentors.getMentorProfile(req.params.uid)
  .then((mentor) => {
    res.status(200).send(mentor);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getMentor': err});
  });
}
