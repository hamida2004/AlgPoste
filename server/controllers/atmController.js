const ATM = require("../models").ATM;

// Define Wilayas and Communes
const data = require('../models/wiallay_data');
 

// Get All ATMs
exports.getAllATMs = async (req, res) => {
  const { wilaya, commune } = req.body;

  try {
      // Find the wilaya
      const foundWilaya = data.find(w => w.wilaya === wilaya);
      if (!foundWilaya) {
          return res.status(404).json({ error: `Wilaya ${wilaya} not found.` });
      }

      // Find the commune within the found wilaya
      const foundCommune = foundWilaya.communes.find(c => c.name === commune);
      if (!foundCommune) {
          return res.status(404).json({ error: `Commune ${commune} not found in ${wilaya}.` });
      }

      // Return the ATMs for the found commune
      res.status(200).json(foundCommune.atm);
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



// Controller function to get ATM state by ID
const ATM = require('../models/ATM'); // Adjust the path as necessary

// Controller function to get ATM state by ID
exports.getATMStateById = async (req, res) => {
    const { atmId } = req.params; // Assuming ATM ID is passed as a URL parameter

    try {
        // Find the ATM by its ID
        const atm = await ATM.findById(atmId).populate('post_id'); // Populate if you need related Post data

        if (!atm) {
            return res.status(404).json({ error: `ATM with ID ${atmId} not found.` });
        }

        // Determine the state based on counter_fon and counter_nonFon
        const isFunctional = atm.counter_fon > atm.counter_nonFon;

        // Return the state of the ATM
        res.status(200).json({ state: isFunctional });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};








