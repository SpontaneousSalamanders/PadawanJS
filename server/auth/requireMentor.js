module.exports = function (req, res, next) {
  if(req.user.type === 'mentor'){
    next();
  }
  else {
    res.send({ message: 'Unauthorized!' });
  }

};
