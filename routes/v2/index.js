const express = require('express');
const router = express.Router();
const characterController = require('../../controllers/v2/character-controller');

router.get('/characters', characterController.getAll);



module.exports = router
