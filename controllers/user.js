const User = require('../model/user');

module.exports.register = async (req, res, next) => {
    const {name,email,password}=req.body;
    const user = new User({ name,email,password });
    await user.save();

    res.status(200).json({
        success:true,
        user
    })
};