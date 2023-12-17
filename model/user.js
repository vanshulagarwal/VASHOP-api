const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
    },
    //use JOI for further validation
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password iis required"],
        select: false
    }
});

module.exports = mongoose.model('User', userSchema);