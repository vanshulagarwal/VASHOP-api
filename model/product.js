const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name cannot be empty"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Product description cannot be empty"]
    },
    oldPrice: {
        type: Number,
        required: [true, "Product price cannot be empty"],
        maxLength: [8, "Price cannot be more than 8 figures"]
    },
    price: {
        type: Number,
        required: [true, "Product price cannot be empty"],
        maxLength: [8, "Price cannot be more than 8 figures"]
    },
    rating: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        require: [true, "Product Category cannot be empty"]
    },
    imgPath: {
        type: String,
        required: [true, "Product must have an image"]
    },
    imgPath2: {
        type: String,
        required: [true, "Product must have an image"]
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
})

module.exports = mongoose.model('Product', productSchema);