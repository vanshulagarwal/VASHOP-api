if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const mongoose=require('mongoose');
const app = express();
const productRoutes=require('./routes/product');
const errorMiddleware=require('./middlewares/error');
const ErrorHand = require('./utils/errorhand');

const dbUrl = process.env.ATLAS_URL || 'mongodb://127.0.0.1:27017/ecommerce';
mongoose.connect(dbUrl)
    .then(() => {
        console.log('mongo database connected');
    })
    .catch((err) => {
        console.log('mongo connection error!!');
        console.log(err);
    })


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1',productRoutes);

app.use(errorMiddleware);

const handleValidationErr = err => {
    console.log(err);
    return new ErrorHand(`Validation Failed... ${err.message}`);
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') {
        err = handleValidationErr(err);
    }
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'Oh no! Something went Wrong!';
    console.log("****error****", err);
    res.status(status).render('error', { err });
    next(err);
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})