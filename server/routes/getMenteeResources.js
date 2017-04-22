'use strict';

const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  console.log('here res!')
  const user_id = req.user.id;

  Resources.getMenteeResources(user_id)
  .then((resources) => {
    res.status(200).send(resources);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getMenteeResources': err});
  });
}
