const ListingModel = require('../models/listing.model');

require('dotenv').config();


class Listing_Controller {
    static async postingListingData(req, res) {
        try {
            const { title, description, price, category, owner } = req.body;
            const list = new ListingModel({ title, description, price, category, owner: req.userID })
            await list.save();
            return res.status(200).json({
                status: true,
                message: 'New List Added successfully.'
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: 'Error' + error.message
            })
        }
    }

    static async fetchingListingList(req, res) {
        try {
            const list = await ListingModel.find({ owner: req.userID });
            return res.status(200).json({
                status: true,
                data: list
            })
        } catch (error) {
            return res.status(500).json({
                status: false,
                message: 'Error' + error.message
            })
        }
    }


    static async fetchingOneListingList(req, res) {
        try {
            const id = req.params.id;
            const userId = req.userID;

            const listing = await ListingModel.findOne({ _id: id, owner: userId });

            if (!listing) {
                return res.status(404).json({
                    status: false,
                    message: 'Listing not found'
                });
            }

            return res.status(200).json({
                status: true,
                data: listing
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: 'Internal server error' + error.message
            });
        }
    }



    static async updatingListingList(req, res) {
        try {
            const id = req.params.id;
            const userId = req.userID;
    
            
            const listing = await ListingModel.findOne({ _id: id, owner: userId });
    
            if (!listing) {
                return res.status(404).json({
                    status: false,
                    message: 'Listing not found'
                });
            }
    
            
            if (req.body.title) {
                listing.title = req.body.title;
            }
            if (req.body.description) {
                listing.description = req.body.description;
            }
            if (req.body.price) {
                listing.price = req.body.price;
            }
            if (req.body.category) {
                listing.category = req.body.category;
            }
    
            
            await listing.save();
    
            return res.status(200).json({
                status: true,
                message: 'Listing updated successfully',
                data: listing
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: 'Internal server error' + error.message
            });
        }
    }
    
}


module.exports = Listing_Controller;