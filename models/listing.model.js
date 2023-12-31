const { default: mongoose } = require("mongoose");
const UserModel = require("./user.model");

const listingSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    category: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
}, {
    versionKey: false
})

const ListingModel = mongoose.model('listings', listingSchema);

module.exports = ListingModel;