const express = require('express');
const authentication = require('../middleware/authentication.middleware');
const Orders_Controller = require('../controllers/orders.controllers');

class Orders_Routes {
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/orders', authentication, Orders_Controller.getOrders);
        this.router.get('/orders/:id', authentication, Orders_Controller.getOneOrder);
        this.router.post('/orders', authentication, Orders_Controller.postingOrders);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new Orders_Routes