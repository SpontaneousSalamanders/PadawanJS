const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  var resource = req.body;

  console.log('resource', resource);

  Resources.postResource(resource)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getResources': err});
  });
}
