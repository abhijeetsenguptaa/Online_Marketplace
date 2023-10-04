const { default: mongoose } = require('mongoose');
const ListingModel = require('./listing.model');
const OrderModel = require('./order.model');
const ProductModel = require('./product.model');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    listings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ListingModel
    }],
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: ProductModel
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: OrderModel
    }],
}, {
    versionKey: false
})


const UserModel = mongoose.Model('users', userSchema);


module.exports = UserModel;

