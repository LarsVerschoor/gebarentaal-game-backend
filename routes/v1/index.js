const express = require('express');
const router = express.Router();
const path = require('path');
const characterController = require('../../controllers/character-controller');
const levelController = require('../../controllers/level-controller');
const userController = require('../../controllers/user-controller');
const jwtAuthentication = require(path.join(__dirname, '../', '../', 'controllers/jwt-authentication'));
const modelController = require('../../controllers/model-controller');
const scoreController = require('../../controllers/score-controller');

const checkLoggedIn = require(path.join(__dirname, '../', '../', 'middlewares/check-logged-in'));
const authenticate = require(path.join(__dirname, '../', '../', 'middlewares/authenticate'));

router.get('/characters', checkLoggedIn, authenticate, characterController.getAll);
router.post('/characters', checkLoggedIn, authenticate, characterController.post);
router.options('/characters', checkLoggedIn, authenticate, characterController.options);

router.get('/characters/:id', checkLoggedIn, authenticate, characterController.get);
router.delete('/characters/:id', checkLoggedIn, authenticate, characterController.delete);
router.put('/characters/:id', checkLoggedIn, authenticate, characterController.put);


router.get('/levels', checkLoggedIn, authenticate, levelController.getAll);
router.post('/levels', checkLoggedIn, authenticate, levelController.post);
router.options('/levels', checkLoggedIn, authenticate, levelController.options);

router.get('/levels/:id', checkLoggedIn, authenticate, levelController.get);
router.delete('/levels/:id', checkLoggedIn, authenticate, levelController.delete);
router.put('/levels/:id', checkLoggedIn, authenticate, levelController.put);

router.post('/scores', checkLoggedIn, authenticate, scoreController.post);
router.get('/scores', checkLoggedIn, authenticate, scoreController.get);

router.get('/models', checkLoggedIn, authenticate, modelController.getAll);
router.get('/models/:id', checkLoggedIn, authenticate, modelController.get);

router.options('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Methods" , "OPTIONS")
    res.setHeader("Allow", "OPTIONS");
    res.status(204).send();
});

router.post('/login', jwtAuthentication);

router.get('/testjwt', checkLoggedIn, authenticate, (req, res) => {
    res.status(200).send(req.user.name);
});

router.get('/testsso', (req, res) => {
    res.status(200).json(req.query);
});




module.exports = router
