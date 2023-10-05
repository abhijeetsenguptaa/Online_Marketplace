const express = require('express');
const Product_Controller = require('../controllers/products.controllers');


class Product_Router {
    constructor() {
        this.router = express.Router();
        this.initializeRouter();
    }

    initializeRouter() {
        this.router.get('/products', Product_Controller.fetchingProducts);
        this.router.get('/products/:id', Product_Controller.fetchingOneProduct);
    }

    getRouter() {
        return this.router;
    }
}


module.exports = new Product_Router;