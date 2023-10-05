const OrderModel = require("../models/order.model");

class Orders_Controller {
    static async postingOrders(req, res) {
        try {
            const { product, quantity, totalAmount, shippingAddress, paymentMethod, orderStatus } = req.body;

            const order = new OrderModel({ user: req.userID, product, quantity, totalAmount, shippingAddress, paymentMethod, orderStatus })
            await order.save();
            return res.status(200).json({
                status: true,
                message: "Orders saved successfully"
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: 'Error' + error.message
            })
        }
    }

    static async getOrders(req, res) {
        try {
            const orders = await OrderModel.find({ user: req.userID });
            return res.status(200).json({
                status: true,
                message: "List of all the orders.",
                data: orders
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: 'Error' + error.message
            })
        }
    }

    static async getOneOrder(req, res) {
        try {
            const id = req.params.id;
            const orders = await OrderModel.find({ _id: id, user: req.userID });
            return res.status(200).json({
                status: true,
                data: orders
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: 'Error' + error.message
            })
        }
    }
}


module.exports = Orders_Controller;