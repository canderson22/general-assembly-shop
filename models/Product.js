const
    mongoose = require('mongoose'),
    productSchema = new mongoose.Schema({
        image: String,
        title: String,
        desc: String,
        color: String,
        inStock: Number,
        price: Number
    })
//
const Product = mongoose.model('Product', productSchema)
module.exports = Product