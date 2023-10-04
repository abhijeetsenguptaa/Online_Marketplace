const { default: mongoose } = require("mongoose");
const UserModel = require("./user.model");
const ProductModel = require("./product.model");

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModel
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: ProductModel
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