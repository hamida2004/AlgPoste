const express = require('express');
const {
  createATM,
  getAllATMs,
  getATMById,
  updateATM,
  deleteATM
} = require('../controllers/atmController');

const router = express.Router();

router.post('/', createATM);
router.get('/', getAllATMs);
router.get('/:id', getATMById);
router.put('/:id', updateATM);
router.delete('/:id', deleteATM);

module.exports = router;
