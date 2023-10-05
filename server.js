const express = require('express');
const cors = require('cors');
const connection = require('./configs/connection');
const usersRoutes = require('./routes/users.routes');
const productsRoutes = require('./routes/products.routes');



class Server {
    constructor() {
        this.PORT = 4000;

        this.app = express();

        this.setMiddleware();

        this.app.get('/', this.handleRouter.bind(this))

        this.initializeRouter();

        this.serverStarter();
    }

    async setMiddleware() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    async handleRouter(req, res) {
        try {
            return res.status(200).json({
                status: true,
                message: "Welcome to the Online Marketplace."
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Error: " + error.message
            })
        }
    }

    async initializeRouter() {
        this.app.use('/api',usersRoutes.getRouter());
        this.app.use('/api', productsRoutes.getRouter());
    }

    async serverStarter() {
        this.app.listen(this.PORT,async()=>{
            try {
                await connection;
                console.log("Server is connected to the Database.");
            } catch (error) {
                console.log("Server could not connect to the Database.")
            }
            console.log("Server is running at the port " + this.PORT);
        })
    }
}

new Server();