const { default: mongoose } = require("mongoose");

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
        },
        quantity: Number
    }],
    totalAmount: {
        type: Number
    },
    shippingAddress: {
        type: String
    },
    paymentMethod: {
        type: String
    },
    orderStatus: {
        type: String
    }
}, {
    versionKey: false
})


const OrderModel = mongoose.model('orders', orderSchema);

module.exports = OrderModel;