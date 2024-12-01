const mongoose = require('mongoose');



const TacheUserSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    
    },
    idea_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Idea' 
    },
    link
  });


const TacheUser =mongoose.models.TacheUser || mongoose.model('TacheUser', TacheUserSchema);
module.exports = TacheUser;