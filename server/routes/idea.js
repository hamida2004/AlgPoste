const express = require('express');
const router = express.Router();
const {
  getAllIdeas,
  getIdeaById,
  createIdea,
  updateIdea,
  deleteIdea
} = require('../controllers/ideaController');

router.get('/', getAllIdeas);
router.get('/:id', getIdeaById);
router.post('/', createIdea);
router.put('/:id', updateIdea);
router.delete('/:id', deleteIdea);

module.exports = router;
