const ProductModel = require("../models/product.model");

class Product_Controller {
    static async fetchingProducts(req, res) {
        try {
            const products = await ProductModel.find()
            return res.status(200).json({
                status: true,
                data: products,
                message: 'List of Products'
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Error: " + error.message
            })
        }
    }

    static async fetchingOneProduct(req, res) {
        try {
            const id = req.params.id;
            const product = await ProductModel.findById(id);
            return res.status(200).json({
                status: true,
                data: product
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Error: " + error.message
            })
        }
    }
}


module.exports = Product_Controller;