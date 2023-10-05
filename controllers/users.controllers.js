const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
class User_Controller {
    static async fetchingUsers(req, res) {
        try {
            const data = await UserModel.find();
            return res.status(200).json({
                status: true,
                data: data,
                message: "Welcome to the Users"
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Error: " + error.message
            })
        }
    }

    static async fetchingOneUser(req, res) {
        try {
            const id = req.params.id;
            const user = await UserModel.find({ _id: id });
            return res.status(200).json({
                status: true,
                data: user
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Error: " + error.message
            })
        }
    }

    static async registeringUser(req, res) {
        try {
            const { name, email, password, address, phoneNumber } = req.body;
            const isUser = await UserModel.find({ email });

            if (isUser.length > 0) {
                return res.status(409).json({
                    status: false,
                    message: 'User already exists'
                })
            }

            bcrypt.hash(password, 6, async (err, hash) => {
                const newUser = new UserModel({ name, email, password: hash, address, phoneNumber })
                await newUser.save()
                res.status(200).send({
                    status: true,
                    msg: 'User Successfully Registered.'
                })
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Error: " + error.message
            })
        }
    }

    static async loggingUser(req, res) {
        try {
            const { email, password } = req.body;

            const isUser = await UserModel.find({ email });
            if (isUser.length == 1) {
                bcrypt.compare(password, isUser[0].password, async (err, result) => {
                    if (result) {
                        const token = jwt.sign({ "user-id": isUser[0]._id }, process.env.secret_key, { expiresIn: '7d' });
                        res.cookie('token', token)
                        return res.status(200).send({
                            status: true,
                            msg: 'Login Successful',
                            token: token,
                            data: isUser[0]
                        })
                    } else {
                        return res.status(404).send({
                            status: false,
                            msg: 'Wrong Credentials.'
                        })
                    }
                })
            } else {
                return res.status(404).send({
                    status: false,
                    message: 'User not found'
                })
            }
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: "Error: " + error.message
            })
        }
    }

    static async updatingUserDetails(req, res) {
        try {
            const userId = req.params.id;

            const user = await UserModel.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (req.body.name) {
                user.name = req.body.name;
            }
            if (req.body.email) {
                user.email = req.body.email;
            }
            if (req.body.address) {
                user.address = req.body.address;
            }
            if (req.body.phoneNumber) {
                user.phoneNumber = req.body.phoneNumber;
            }

            await user.save();

            res.status(200).json({
                message: 'User details updated successfully', user
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Internal server error'
            });
        }
    }
}


module.exports = User_Controller