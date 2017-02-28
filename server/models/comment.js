const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  email: { type: String, lowercase: true },
  message: String,
  hash: String
});

const ModelClass = mongoose.model('comment', commentSchema);

module.exports = ModelClass;
