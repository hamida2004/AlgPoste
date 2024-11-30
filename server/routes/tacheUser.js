const express = require('express');
const router = express.Router();
const {
  getAllTacheUsers,
  getTacheUserById,
  createTacheUser,
  updateTacheUser,
  deleteTacheUser
} = require('../controllers/tacheUserController');

router.get('/', getAllTacheUsers);
router.get('/:id', getTacheUserById);
router.post('/', createTacheUser);
router.put('/:id', updateTacheUser);
router.delete('/:id', deleteTacheUser);

module.exports = router;
