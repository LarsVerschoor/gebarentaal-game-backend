const express = require('express')
const testRouter = new express.Router

testRouter.get('/test',  async (req, res) => {
    res.json('Dit is versie 2')
});

module.exports = testRouter;