const Idea = require('../models').Idea;



exports.createIdea = async (req, res) => {
  const idea = new Idea(req.body);
  try {
    const newIdea = await idea.save();
    res.status(201).json(newIdea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


