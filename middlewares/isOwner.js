const Review = require('../model/review');
const jwt = require('jsonwebtoken');

module.exports.isOwner = async (req, res, next) => {
    const { reviewId } = req.params;
    const { id } = req.user;

    const review = await Review.findById(reviewId);
    if (review.author.equals(id)) {
        next();
    }
    else {
        res.status(403).json({
            success: false,
            message: "You are not allowed to delete this review"
        })
    }
}