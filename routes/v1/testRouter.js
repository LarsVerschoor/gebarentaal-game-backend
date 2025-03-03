const express = require('express')
const testRouter = new express.Router

testRouter.get('/test',  async (req, res) => {
        res.json('hallo world')
    });

module.exports = testRouter;