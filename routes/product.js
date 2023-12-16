const express = require('express');
const { getAllProducts, createProduct, getProduct } = require('../controllers/product');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();

router.route('/').get(catchAsync(getAllProducts));
router.route('/new').post(catchAsync(createProduct));
router.route('/:id').get(catchAsync(getProduct));

module.exports = router;