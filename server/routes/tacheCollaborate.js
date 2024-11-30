const express = require('express');
const router = express.Router();
const {
  getAllTacheCollaborates,
  getTacheCollaborateById,
  createTacheCollaborate,
  updateTacheCollaborate,
  deleteTacheCollaborate
} = require('../controllers/tacheCollaborateController');

// Routes for TacheCollaborate
router.get('/', getAllTacheCollaborates);
router.get('/:id', getTacheCollaborateById);
router.post('/', createTacheCollaborate);
router.put('/:id', updateTacheCollaborate);
router.delete('/:id', deleteTacheCollaborate);

module.exports = router;
