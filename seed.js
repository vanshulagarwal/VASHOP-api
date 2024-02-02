if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const data = require('./ecommerce.products.json');
const Product = require('./model/product');

const dbUrl = process.env.ATLAS_URL;
mongoose.connect(dbUrl)
    .then(() => {
        console.log('mongo database connected');
    })
    .catch((err) => {
        console.log('mongo connection error!!');
        console.log(err);
    })

data.forEach(async (item) => {
    const prod = new Product(item);
    await prod.save();
})