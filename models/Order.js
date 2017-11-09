const 
    mongoose = require('mongoose'),
    orderSchema = new mongoose.Schema({
        items: Array,
        paymentId: String,
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }, {timestamps: true})
//

const Order = mongoose.model('Order', orderSchema)
module.exports = Order