const Resources = require('../models/resources.js');

module.exports = (req, res) => {
  const user_id = req.params.uid;

  Resources.getMentorResources(user_id)
  .then((resources) => {
    res.status(200).send(resources);
  })
  .catch((err) => {
    res.status(err.status || 500).send({'error in getMentorResources': err});
  });
}
