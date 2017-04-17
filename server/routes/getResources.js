const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  Resources.getMentorResources(req.params.uid)
  .then((resource) => {
    res.status(200).send(resource);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getMentorResources': err});
  });
}
