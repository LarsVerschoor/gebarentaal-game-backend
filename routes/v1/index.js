const express = require('express');
const router = express.Router();
const path = require('path');
const characterController = require('../../controllers/character-controller');
const levelController = require('../../controllers/level-controller');
const userController = require('../../controllers/user-controller');
const jwtAuthentication = require(path.join(__dirname, '../', '../', 'controllers/jwt-authentication'));
const modelController = require('../../controllers/model-controller');

const checkLoggedIn = require(path.join(__dirname, '../', '../', 'middlewares/check-logged-in'));
const authenticate = require(path.join(__dirname, '../', '../', 'middlewares/authenticate'));

router.get('/characters', characterController.getAll);
router.post('/characters', characterController.post);
router.options('/characters', characterController.options);

router.get('/characters/:id', characterController.get);
router.delete('/characters/:id', characterController.delete);
router.put('/characters/:id', characterController.put);


router.get('/levels', levelController.getAll);
router.post('/levels', levelController.post);
router.options('/levels', levelController.options);

router.get('/levels/:id', levelController.get);
router.delete('/levels/:id', levelController.delete);
router.put('/levels/:id', levelController.put);


router.get('/users', userController.getAll);
router.post('/users', userController.post);
router.options('/users', userController.options);

router.get('/users/:id', userController.get);
router.delete('/users/:id', userController.delete);
router.put('/users/:id', userController.put);




router.get('/models', modelController.getAll);
router.get('/models/:id', modelController.get);


//v1GameRouter.post('/scores', score.getAll);



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
