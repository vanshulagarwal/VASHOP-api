const Product = require('../model/product');
const ApiFeatures = require('../utils/apiFeatures');
const ErrorHand = require('../utils/errorhand');

exports.createProduct = async (req, res, next) => {
    const product = new Product({ ...req.body });
    await product.save();
    res.status(201).json({
        sucess: true,
        product
    });
}

exports.getAllProducts = async (req, res, next) => {
    const apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter();
    const products = await apiFeatures.query.populate('reviews');
    // const products = await Product.find().populate('reviews');
    res.status(201).json({
        sucess: true,
        products
    });
}

exports.getProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate({
        path: 'reviews',
        populate: {
            path: 'author',
            model: 'User'
        }
    });
    if (!product) {
        return next(new ErrorHand("Product Not Found", 404));
    }
    res.status(201).json({
        success: true,
        product
    });
}