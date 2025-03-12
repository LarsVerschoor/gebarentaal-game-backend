const express = require('express');
const v1GameRouter = express.Router();
const path = require('path');
const characterController = require('../../controllers/character-controller');
const levelController = require('../../controllers/level-controller');
const userController = require('../../controllers/user-controller');
const jwtAuthentication = require(path.join(__dirname, '../', '../', 'controllers/jwt-authentication'));

const checkLoggedIn = require(path.join(__dirname, '../', '../', 'middlewares/check-logged-in'));
const authenticate = require(path.join(__dirname, '../', '../', 'middlewares/authenticate'));

v1GameRouter.get('/characters', characterController.getAll);
v1GameRouter.get('/characters/:id', characterController.get);

v1GameRouter.post('/characters', characterController.post);

v1GameRouter.get('/levels', levelController.getAll);
v1GameRouter.get('/levels/:id', levelController.getAll);

v1GameRouter.post('/scores', levelController.getAll);


v1GameRouter.get('/users', userController.getAll);

v1GameRouter.options('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Methods" , "OPTIONS")
    res.setHeader("Allow", "OPTIONS");
    res.status(204).send();
});

v1GameRouter.post('/login', jwtAuthentication);

v1GameRouter.get('/testjwt', checkLoggedIn, authenticate, (req, res) => {
    res.status(200).send(req.user.name);
});

v1GameRouter.get('/testsso', (req, res) => {
    res.status(200).json(req.query);
});




module.exports = v1GameRouter
