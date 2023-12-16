const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
    },
});

module.exports = mongoose.model('Review', reviewSchema);