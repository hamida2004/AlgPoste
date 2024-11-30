const express = require('express');
const router = express.Router();
const { getAllWebinars, getWebinarById, createWebinar, updateWebinar, deleteWebinar } = require('../controllers/webinarController');

router.get('/', getAllWebinars);
router.get('/:id', getWebinarById);
router.post('/', createWebinar);
router.put('/:id', updateWebinar);
router.delete('/:id', deleteWebinar);

module.exports = router;
