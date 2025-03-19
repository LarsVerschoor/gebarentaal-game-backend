const express = require('express');
const path = require("path");
const router = express.Router();
const characterController = require('../../controllers/v2/character-controller');
const accountController = require('../../controllers/v2/account-controller');

const checkLoggedIn = require(path.join(__dirname, '../', '../', 'middlewares/check-logged-in'));
const authenticate = require(path.join(__dirname, '../', '../', 'middlewares/authenticate'));

router.get('/characters', checkLoggedIn, authenticate, characterController.getAll);

router.get('/accounts', checkLoggedIn, authenticate, accountController.getAll);
router.post('/accounts', checkLoggedIn, authenticate, accountController.post);
router.delete('/accounts/:id', checkLoggedIn, authenticate, accountController.delete);
router.patch('/accounts/:id', checkLoggedIn, authenticate, authenticate.patch);

module.exports = router
