const ErrorHand = require("../utils/errorhand");
const jwt = require('jsonwebtoken');
const User = require('../model/user');

module.exports.isLoggedIn = async (req, res, next) => {
    const {token} = req.cookies;
    if (!token) {
        return next(new ErrorHand("You need to log in first"));
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(data.id);

    next();
}