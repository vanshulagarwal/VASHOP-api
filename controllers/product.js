const Product = require('../model/product');
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
    const products = await Product.find();
    // const products = await Product.find().populate('reviews');
    res.status(201).json({
        sucess: true,
        products
    });
}

exports.getProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // const product = await Product.findById(id).populate('reviews');
    if (!product) {
        return next(new ErrorHand("Product Not Found", 404));
    }
    res.status(201).json({
        success: true,
        product
    });
}