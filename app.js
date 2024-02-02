if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const mongoose=require('mongoose');
const app = express();
const productRoutes=require('./routes/product');
const reviewRoutes=require('./routes/review');
const userRoutes=require('./routes/user');
const errorMiddleware=require('./middlewares/error');
const ErrorHand = require('./utils/errorhand');
const cookieParser=require('cookie-parser');
const cors=require('cors');

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
app.use(cookieParser());
app.use(cors({credentials:true, origin:process.env.CLIENT_URL}));

app.use('/api/v1/products',productRoutes);
app.use('/api/v1/products/:id',reviewRoutes);
app.use('/api/v1/',userRoutes);

app.use(errorMiddleware);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})