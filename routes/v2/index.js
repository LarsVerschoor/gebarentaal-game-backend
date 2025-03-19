const express = require('express');
const path = require("path");
const router = express.Router();
const characterController = require('../../controllers/v2/character-controller');
const accountController = require('../../controllers/v2/account-controller');

const checkLoggedIn = require(path.join(__dirname, '../', '../', 'middlewares/check-logged-in'));
const authenticate = require(path.join(__dirname, '../', '../', 'middlewares/authenticate'));

router.get('/characters', characterController.getAll);

router.get('/accounts', accountController.getAll);
router.post('/accounts', accountController.post);
router.delete('/accounts', accountController.delete);


module.exports = router
