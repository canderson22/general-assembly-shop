const 
    express = require('express'),
    orderRouter = new express.Router(),
    stripe = require('../stripe')
//

orderRouter.get('/paymentSuccess', (req, res) => {

})

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
      console.log('no')
    res.status(500).send({ error: stripeErr });
  } else {
      console.log('ok')
    res.status(200).send({ success: stripeRes });
  }
}

orderRouter.post('/charge', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res))
})

module.exports = orderRouter