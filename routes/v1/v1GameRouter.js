const express = require('express');
const v1GameRouter = express.Router();
const characterController = require('../../controllers/character-controller');
const levelController = require('../../controllers/level-controller')
const userController = require('../../controllers/user-controller')


v1GameRouter.get('/characters', characterController.getAll);
v1GameRouter.get('/levels', levelController.getAll);
v1GameRouter.get('/users', userController.getAll);

v1GameRouter.options('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Methods" , "OPTIONS")
    res.setHeader("Allow", "OPTIONS");
    res.status(204).send();
});




module.exports = v1GameRouter
