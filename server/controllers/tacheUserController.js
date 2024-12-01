const TacheUser = require('../models').TacheUser;

exports.getAllTacheUsers = async (req, res) => {
  try {
    const tacheUsers = await TacheUser.find();
    res.status(200).json(tacheUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTacheUserById = async (req, res) => {
  try {
    const tacheUser = await TacheUser.findById(req.params.id);
    if (!tacheUser) {
      return res.status(404).json({ message: 'TacheUser not found' })
    }
    res.status(200).json(tacheUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTacheUser = async (req, res) => {
  const tacheUser = new TacheUser(req.body);
  try {
    const newTacheUser = await tacheUser.save();
    res.status(201).json(newTacheUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


