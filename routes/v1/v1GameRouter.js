const express = require('express');
const v1GameRouter = express.Router();
const path = require('path');
const characterController = require('../../controllers/character-controller');
const levelController = require('../../controllers/level-controller');
const userController = require('../../controllers/user-controller');
const jwtAuthentication = require(path.join(__dirname, '../', '../', 'controllers/jwt-authentication'));
const modelController = require('../../controllers/model-controller');

const authenticate = require(path.join(__dirname, '../', '../', 'middlewares/authenticate'));


v1GameRouter.get('/characters', characterController.getAll);
v1GameRouter.post('/characters', characterController.post);
v1GameRouter.options('/characters', characterController.options);

v1GameRouter.get('/characters/:id', characterController.get);
v1GameRouter.delete('/characters/:id', characterController.delete);
v1GameRouter.put('/characters/:id', characterController.put);


v1GameRouter.get('/levels', levelController.getAll);
v1GameRouter.post('/levels', levelController.post);
v1GameRouter.options('/levels', levelController.options);

v1GameRouter.get('/levels/:id', levelController.get);
v1GameRouter.delete('/levels/:id', levelController.delete);
v1GameRouter.put('/levels/:id', levelController.put);


v1GameRouter.get('/users', userController.getAll);
v1GameRouter.post('/users', userController.post);
v1GameRouter.options('/users', userController.options);

v1GameRouter.get('/users/:id', userController.get);
v1GameRouter.delete('/users/:id', userController.delete);
v1GameRouter.put('/users/:id', userController.put);




v1GameRouter.get('/models', modelController.getAll);
v1GameRouter.get('/models/:id', modelController.get);


//v1GameRouter.post('/scores', score.getAll);



v1GameRouter.options('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Methods" , "OPTIONS")
    res.setHeader("Allow", "OPTIONS");
    res.status(204).send();
});

v1GameRouter.post('/login', jwtAuthentication);

v1GameRouter.get('/testjwt', authenticate, (req, res) => {
    res.status(200).send(req.user.name);
});




module.exports = v1GameRouter
