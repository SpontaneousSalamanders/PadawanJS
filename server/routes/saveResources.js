const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  Resources.saveResources(req.params.uid)
  .then((resource) => {
    res.status(200);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in saveResources': err});
  });
}
