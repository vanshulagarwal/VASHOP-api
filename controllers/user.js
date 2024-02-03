const User = require('../model/user');
const bcrypt = require('bcrypt');
const ErrorHand = require('../utils/errorhand');
const sendjwtToken = require('../utils/sendjwtToken');

module.exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;

    const foundUser = await User.findOne({ email: email });

    if (foundUser) {
        return res.status(200).json({
            success: true,
            error: "Email already in use"
        })
    }

    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        name,
        email,
        password: hash
    });
    await user.save();

    sendjwtToken(user,201,res);
};

module.exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findAndValidate(email, password);

    if (!user) {
        return next(new ErrorHand("Invalid email or password",404));
    }

    sendjwtToken(user,200,res);
}

module.exports.logout=async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production', // Set to true in production
        sameSite: 'None',
    });
    res.status(200).json({
        success:true,
        message:"Logged Out",
    });
}