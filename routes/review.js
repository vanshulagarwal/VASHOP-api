const express = require('express');
const router = express.Router({ mergeParams: true });
const { addReview, deleteReview } = require('../controllers/review');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const { isOwner } = require('../middlewares/isOwner');

router.route('/addreview').post(catchAsync(isLoggedIn), catchAsync(addReview));
router.route('/deletereview/:reviewId').delete(catchAsync(isLoggedIn), isOwner, catchAsync(deleteReview));

module.exports = router;