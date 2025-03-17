const express = require('express');
const v1Router = require('../v1/v1GameRouter');
const v2GameRouter = express.Router();

v2GameRouter.use(v1Router);

v2GameRouter.get('/characters', (req, res) => {
    res.send('v2!');
});

module.exports = v2GameRouter
