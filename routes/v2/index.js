const express = require('express');
const router = express.Router();

router.get('/characters', (req, res) => {
    res.send('v2!');
});

module.exports = router
