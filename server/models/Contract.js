const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
    user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User' 
    },
    idea_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Idea' 
    },
    status: String,
    collaboration: String
  });


const Contract =mongoose.models.Contract || mongoose.model('Contract', ContractSchema);
module.exports = Contract;
