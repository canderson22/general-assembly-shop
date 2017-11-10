const
  mongoose = require('mongoose'),
  Product = require('../models/Product')

module.exports = {
    index: (req, res) => {
        Product.find({}, (err, products) => {
            if(err) return console.log(products)
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