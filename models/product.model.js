const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    }
}, {
    versionKey: false
})

const ProductModel = mongoose.Model('products', productSchema);

module.exports = ProductModel;