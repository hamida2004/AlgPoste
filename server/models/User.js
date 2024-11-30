// Example for User.js
const mongoose = require('mongoose');

// Define schema
const UserSchema = new mongoose.Schema({
  user_name: String,
  email: String,
  password: String,
  badges: Number,
  liked_post: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  saved_post: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

// Use mongoose.model only if the model is not already registered
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
