const express = require('express');
const router = express.Router();
const path = require('path');
const accessKeyController = require(path.join(__dirname, '../', 'controllers/access-key-controller'));

router.get('/', accessKeyController.registerPage);
router.post('/register', accessKeyController.createKey);


module.exports = router;