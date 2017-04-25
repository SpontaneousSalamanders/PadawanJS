'use strict'

const DirectMessages = require('../models/directMessages.js');

module.exports = (req, res) => {
  const message = req.body;