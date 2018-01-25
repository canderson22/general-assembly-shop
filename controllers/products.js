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
            product.image = req.body.product.image || product.image
            product.title = req.body.product.title || product.title
            product.desc = req.body.product.desc || product.desc
            product.color = req.body.product.color || product.color
            product.inventory = req.body.product.inventory || product.inventory
            if (req.body.product.inventory === 0) {
                product.inventory = 0
            } 
            product.price = req.body.product.price || product.price

            product.save((err, product) => {
                console.log(product)
                if (err) return res.json({err})
                res.json({product})
            })
        })
    },

    destroy: (req, res) => {

    },

}