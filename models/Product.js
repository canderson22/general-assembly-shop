const
    mongoose = require('mongoose'),
    productSchema = new mongoose.Schema({
        image: String,
        title: String,
        desc: String,
        color: String,
        inStock: String,
        price: String
    })
//
const Product = mongoose.model('Product', productSchema)
module.exports = Product