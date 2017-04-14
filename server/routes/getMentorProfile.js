const Mentors = require('../models/mentors.js');

module.exports = (req, res) => {
  Mentors.getMentorProfile()
  .then((mentorProfile) => {
    res.status(200).send(mentorProfile);
  })
  .catch((error) => {
    res.status(error.status || 500).send({'error in getMentorProfile': error});
  });
}
