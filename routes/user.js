const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { register, login, logout } = require('../controllers/user');
const router = express.Router();

router.route('/register').post(catchAsync(register));
router.route('/login').post(catchAsync(login));
router.route('/logout').get(catchAsync(logout));

module.exports = router;