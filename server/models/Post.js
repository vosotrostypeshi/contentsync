
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  platforms: {
    type: [String],
    required: true
  },
  media: {
    type: [String],
    default: []
  },
  characterCount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Draft', 'Published'],
    default: 'Draft'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
