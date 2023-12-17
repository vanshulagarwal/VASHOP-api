const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { register } = require('../controllers/user');
const router = express.Router();

router.route('/register').post(catchAsync(register));

module.exports = router;