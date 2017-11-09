const
  mongoose = require('mongoose'),
  stripe = require('../stripe'),
  Order = require('../models/Order'),
  postStripeCharge = (res) => (stripeErr, stripeRes) => {
    if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
  }

module.exports = {
    index: (req, res) => {
        res.json({})
    },

    create: (req, res) => {
        console.log(req.body)
        Order.create(req.body.order, (err, order) => {
            if(err) return console.log(err)
            res.json({success: true, order })
        })
    },

    charge: (req, res) => {
        stripe.charges.create(req.body, postStripeCharge(res))
    }
}