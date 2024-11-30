const { ATM } = require("../models");

// Create ATM
exports.createATM = async (req, res) => {
  try {
    const atm = await ATM.create(req.body);
    res.status(201).json(atm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All ATMs
exports.getAllATMs = async (req, res) => {
  try {
    const atms = await ATM.find().populate("post_id");
    res.status(200).json(atms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get ATM by ID
exports.getATMById = async (req, res) => {
  try {
    const atm = await ATM.findById(req.params.id).populate("post_id");
    if (!atm) return res.status(404).json({ error: "ATM not found" });
    res.status(200).json(atm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update ATM
exports.updateATM = async (req, res) => {
  try {
    const atm = await ATM.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!atm) return res.status(404).json({ error: "ATM not found" });
    res.status(200).json(atm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete ATM
exports.deleteATM = async (req, res) => {
  try {
    const atm = await ATM.findByIdAndDelete(req.params.id);
    if (!atm) return res.status(404).json({ error: "ATM not found" });
    res.status(200).json({ message: "ATM deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
