const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  var user_id = req.body.user_id;
  var resource_id = req.body.resource_id;

  Resources.saveResources(user_id, resource_id)
  .then(() => {
    res.status(200);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in saveResources': err});
  });
};
