const Review = require('../model/review');
const Product = require('../model/product');
const ErrorHand = require('../utils/errorhand');

module.exports.addReview = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHand("Product does not exist", 404));
    }
    const review = new Review({ author: req.user._id, ...req.body });
    product.reviews.push(review);
    await review.save();
    await product.save();

    res.status(200).json({
        success: true,
        review,
        product
    })
}