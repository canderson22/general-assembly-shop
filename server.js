const
  dotenv = require('dotenv').load(),
  express = require('express'),
  stripe = require('stripe')(process.env.STRIPE_SECRET),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/general-assembly'
  PORT = process.env.PORT || 3001,
  userRoutes = require('./routes/users'),
  ProductRoutes = require('./routes/products'),
  orderRoutes = require('./routes/orders'),
  eventsRoutes = require('./routes/events')
//

mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || `Connected to MongoDB.`)
});

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}/client/build`))


app.get('/api', (req, res) => {
    res.json({message: 'API ROOT'})
})

app.use('/api/users', userRoutes)
app.use('/api/products', ProductRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/events', eventsRoutes)

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
    console.log(err || `Listening on port 🔥 ${PORT}`)
})
