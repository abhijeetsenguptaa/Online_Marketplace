require("dotenv").config();
const { default: mongoose } = require("mongoose");

class Connection {
    constructor(){
        this.connection = mongoose.connect(process.env.mongoUrl)
    }
}


module.exports = new Connection();