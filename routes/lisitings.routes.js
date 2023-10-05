const express = require('express');
const authentication = require('../middleware/authentication.middleware');
const Listing_Controller = require('../controllers/listings.controllers');

class Listing_Router {
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/listings', authentication, Listing_Controller.fetchingListingList)
        this.router.get('/listings/:id', authentication, Listing_Controller.fetchingOneListingList)
        this.router.post('/listings', authentication, Listing_Controller.postingListingData)
        this.router.patch('/listings/:id', authentication, Listing_Controller.updatingListingList)
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new Listing_Router;