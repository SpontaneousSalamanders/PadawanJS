module.exports = function (req, res, next) {
  if(req.user.mentor === 'mentor'){
    next();
  }
  else {
    res.send({ message: 'Unauthorized!' });
  }

};
