const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  Resources.getResources(req.params.uid)
  .then((resource) => {
    res.status(200).send(resource);
  })
  .catch((error) => {
    res.status(error.status || 500).send({'error in getResources': error});
  });
}
