const mongoose = require('mongoose');

const TacheCollaborateSchema = new mongoose.Schema({
    title: String,
    description: String
  });




const TacheCollaborate =mongoose.models.TacheCollaborate || mongoose.model('TacheCollaborate', TacheCollaborateSchema);
module.exports = TacheCollaborate;
