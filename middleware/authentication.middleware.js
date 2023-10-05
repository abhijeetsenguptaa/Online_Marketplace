require('dotenv').config();
const jwt = require('jsonwebtoken');

async function authentication(req, res, next) {
    try {
        const token = req.headers.authorization

        if (token) {
            jwt.verify(token, process.env.secret_key, async (err, decode) => {
                if (decode) {
                    req.userID = decode['user-id']
                    console.log(req)
                    next()
                } else {
                    return res.status(403).json({
                        status: false,
                        message: 'Please provide a valid token.'
                    })
                }
            })
        } else {
            return res.status(500).json({
                status: false,
                message: 'Please provide a token.'
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Error: " + error.message
        })
    }
}


module.exports = authentication