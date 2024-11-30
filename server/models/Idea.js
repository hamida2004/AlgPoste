const mongoose = require('mongoose');


const IdeaSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    type: String,
    title: String,
    description: String,
    img: String,
    link: String,
    status: String
  });

const Idea = mongoose.models.Idea || mongoose.model('Idea', IdeaSchema);
module.exports = Idea;
