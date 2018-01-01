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
        Product.findById(req.params._id, (err, product) => {
            if(err) return res.json({err})
            product.image = req.body.image || product.image
            product.title = req.body.title || product.title
            product.desc = req.body.desc || product.desc
            product.color = req.body.color || product.color
            product.inventory = req.body.inventory || product.inventory
            product.price = req.body.price || product.price
            
            product.save((err, product) => {
                if (err) return res.json({err})
                res.json({product})
            })
        })
    },

    destroy: (req, res) => {

    },

}