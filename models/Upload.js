const mongoose = require('mongoose');
const User = require('../models/User')
const Challenge = require('../models/Challenge');

const uploadSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  challenge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge'
  }
  // need a way to upload the file path

}, { timestamps: true });

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload;
