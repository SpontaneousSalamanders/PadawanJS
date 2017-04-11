var Mentors = require('../models/mentors.js')

module.exports = function(req, res) {
  Mentors.getMentors()
  .then(function(mentors) {
    res.status(200).send(mentors);
  })
  .catch(function(error) {
    res.status(error.status || 500).send({'error in getMentors': error});
  });
}