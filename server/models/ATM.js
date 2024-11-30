const mongoose = require('mongoose');


const ATMSchema = new mongoose.Schema({
    post_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    location: String,
    number: Number,
    state: String,
    counter_fon: Number,
    counter_nonFon: Number,
    counter_non_cash: Number
  });


  const ATM = mongoose.models.ATM || mongoose.model('ATM', ATMSchema);
  module.exports = ATM;