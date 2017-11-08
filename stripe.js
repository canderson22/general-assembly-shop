const configureStripe = require('stripe')

const stripe = configureStripe(process.env.STRIPE_SECRET)

module.exports = stripe