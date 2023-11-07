const express = require('express');
const router = express.Router();
const userController = require('../controller/usereController');

router.post('/',userController.register);

module.exports = router;