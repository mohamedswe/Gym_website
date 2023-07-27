// post.model.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  location: { type: String, required: true },
  dateTime: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'all'], required: true },
  workoutType: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
