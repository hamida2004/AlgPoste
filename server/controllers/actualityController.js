const Actuality = require('../models').Actuality;

exports.getAllActualities = async (req, res) => {
  try {
    const actualities = await Actuality.find();
    res.status(200).json(actualities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getActualityById = async (req, res) => {
  try {
    const actuality = await Actuality.findById(req.params.id);
    if (!actuality) return res.status(404).json({ message: 'Actuality not found' });
    res.status(200).json(actuality);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createActuality = async (req, res) => {
  const actuality = new Actuality(req.body);
  try {
    const newActuality = await actuality.save();
    res.status(201).json(newActuality);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateActuality = async (req, res) => {
  try {
    const updatedActuality = await Actuality.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedActuality) return res.status(404).json({ message: 'Actuality not found' });
    res.status(200).json(updatedActuality);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteActuality = async (req, res) => {
  try {
    const deletedActuality = await Actuality.findByIdAndDelete(req.params.id);
    if (!deletedActuality) return res.status(404).json({ message: 'Actuality not found' });
    res.status(200).json(deletedActuality);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

