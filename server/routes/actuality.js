const express = require('express');
const router = express.Router();
const { getAllActualities, getActualityById, createActuality, updateActuality, deleteActuality } = require('../controllers/actualityController');

router.get('/', getAllActualities);
router.get('/:id', getActualityById);
router.post('/', createActuality);
router.put('/:id', updateActuality);
router.delete('/:id', deleteActuality);

module.exports = router;
