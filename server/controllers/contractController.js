const Contract = require('../models').Contract;

exports.getAllContracts = async (req, res) => {
  try {
    const contracts = await Contract.find();
    res.status(200).json(contracts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getContractById = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);
    if (!contract) return res.status(404).json({ message: 'Contract not found' });
    res.status(200).json(contract);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createContract = async (req, res) => {
  const contract = new Contract(req.body);
  try {
    const newContract = await contract.save();
    res.status(201).json(newContract);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateContract = async (req, res) => {
  try {
    const updatedContract = await Contract.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContract) return res.status(404).json({ message: 'Contract not found' });
    res.status(200).json(updatedContract);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteContract = async (req, res) => {
  try {
    const deletedContract = await Contract.findByIdAndDelete(req.params.id);
    if (!deletedContract) return res.status(404).json({ message: 'Contract not found' });
    res.status(200).json(deletedContract);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
