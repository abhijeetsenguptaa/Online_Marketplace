const { default: mongoose } = require('mongoose');

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
        ref: 'listings'
    }],
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
    }],
}, {
    versionKey: false
})


const UserModel = mongoose.model('users', userSchema);


module.exports = UserModel;

