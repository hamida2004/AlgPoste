const mongoose = require('mongoose');

const ActualitySchema = new mongoose.Schema({
    post_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post' 
    },
    title: String,
    content: String
  });

const Actuality =mongoose.models.Actuality || mongoose.model('Actuality', ActualitySchema);
module.exports= Actuality; 

