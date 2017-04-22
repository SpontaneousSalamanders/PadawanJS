'use strict';

const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  const user_id = req.user.id;
  const resource = req.body;

  Resources.postResource(user_id, resource)
  .then(() => {
    res.status(200).end();
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in postResources': err});
  });
};
