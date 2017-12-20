const
  mongoose = require('mongoose'),
  Product = require('../models/Product')

module.exports = {
    index: (req, res) => {
        Product.find({}, (err, products) => {
            if(err) return res.json({error: 'Error with Server, Please try refreshing page.'})
            res.json({products})
        })
    },

    create: (req, res) => {

    },

    show: (req, res) => {

    },

    update: (req, res) => {

    },

    destroy: (req, res) => {

    },

}