const Idea = require('../models').Idea;

exports.getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIdeaById = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) return res.status(404).json({ message: 'Idea not found' });
    res.status(200).json(idea);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createIdea = async (req, res) => {
  const idea = new Idea(req.body);
  try {
    const newIdea = await idea.save();
    res.status(201).json(newIdea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateIdea = async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedIdea) return res.status(404).json({ message: 'Idea not found' });
    res.status(200).json(updatedIdea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteIdea = async (req, res) => {
  try {
    const deletedIdea = await Idea.findByIdAndDelete(req.params.id);
    if (!deletedIdea) return res.status(404).json({ message: 'Idea not found' });
    res.status(200).json(deletedIdea);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
