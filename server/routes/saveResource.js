const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  const user_id = req.body.user_id;
  const resource_id = req.body.resource_id;

  Resources.saveResource(user_id, resource_id)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in saveResources': err});
  });
};
