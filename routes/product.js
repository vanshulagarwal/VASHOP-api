const express = require('express');
const { getAllProducts, createProduct, getProduct } = require('../controllers/product');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();

router.route('/products').get(catchAsync(getAllProducts));
router.route('/products/new').post(catchAsync(createProduct));
router.route('/products/:id').get(catchAsync(getProduct));

module.exports = router;