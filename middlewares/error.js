const ErrorHand = require('../utils/errorhand');


module.exports = (err, req, res, next) => {
    const { statusCode = 500, message = "Oh no! Something went wrong!!" } = err;
    console.log("****error****")
    console.log(err);

    console.log(err.name);
    if (err.name === 'ValidationError') {
        res.status(statusCode).json({
            success: false,
            error: `MongoDB validation error...${err.message}`
        })
    }
    else if (err.name === 'CastError') {
        res.status(statusCode).json({
            success: false,
            error: `Resource Not Found.. Invalid:${err.path}`

        });
    }
    else {
        res.status(statusCode).json({
            success: false,
            error: err.message
        });
    }
}