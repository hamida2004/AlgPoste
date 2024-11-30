const mongoose = require('mongoose');


const UserPostSchema = new mongoose.Schema({
    user_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User' 
    },
    post_id: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Post' 
    }
  });


const UserPost = mongoose.models.UserPost || mongoose.model('UserPost', UserPostSchema);
module.exports = UserPost;