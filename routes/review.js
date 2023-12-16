const express = require('express');
const router = express.Router({ mergeParams: true });
const { addReview } = require('../controllers/review');
const catchAsync = require('../utils/catchAsync');

router.route('/addreview').post(catchAsync(addReview));

module.exports = router;