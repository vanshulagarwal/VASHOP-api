const express = require('express');
const router = express.Router({ mergeParams: true });
const { addReview } = require('../controllers/review');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../middlewares/isLoggedIn');

router.route('/addreview').post(isLoggedIn,catchAsync(addReview));

module.exports = router;