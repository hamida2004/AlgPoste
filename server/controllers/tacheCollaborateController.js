const TacheCollaborate = require('../models').TacheCollaborate;

// Get all TacheCollaborates
exports.getAllTacheCollaborates = async (req, res) => {
  try {
    const tacheCollaborates = await TacheCollaborate.find();
    res.status(200).json(tacheCollaborates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get TacheCollaborate by ID
exports.getTacheCollaborateById = async (req, res) => {
  try {
    const tacheCollaborate = await TacheCollaborate.findById(req.params.id);
    if (!tacheCollaborate) return res.status(404).json({ message: 'TacheCollaborate not found' });
    res.status(200).json(tacheCollaborate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new TacheCollaborate
exports.createTacheCollaborate = async (req, res) => {
  const tacheCollaborate = new TacheCollaborate(req.body);
  try {
    const newTacheCollaborate = await tacheCollaborate.save();
    res.status(201).json(newTacheCollaborate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a TacheCollaborate
exports.updateTacheCollaborate = async (req, res) => {
  try {
    const updatedTacheCollaborate = await TacheCollaborate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTacheCollaborate) return res.status(404).json({ message: 'TacheCollaborate not found' });
    res.status(200).json(updatedTacheCollaborate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a TacheCollaborate
exports.deleteTacheCollaborate = async (req, res) => {
  try {
    const deletedTacheCollaborate = await TacheCollaborate.findByIdAndDelete(req.params.id);
    if (!deletedTacheCollaborate) return res.status(404).json({ message: 'TacheCollaborate not found' });
    res.status(200).json(deletedTacheCollaborate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

