'use strict';

const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  const resource = req.body;

  Resources.postResource(resource)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getResources': err});
  });
}
