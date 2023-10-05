const express = require('express');
const User_Controller = require('../controllers/users.controllers');


class User_Router {
    constructor() {
        this.router = express.Router()
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/users', User_Controller.fetchingUsers);
        this.router.get('/users/:id', User_Controller.fetchingOneUser);
        this.router.post('/register', User_Controller.registeringUser);
        this.router.post('/login', User_Controller.loggingUser);
        this.router.patch('/users/:id', User_Controller.updatingUserDetails);
    }

    getRouter() {
        return this.router;
    }
}


module.exports = new User_Router;
