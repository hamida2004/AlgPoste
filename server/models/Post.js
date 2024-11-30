const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: String,
    location: String
  });


const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
module.exports = Post;