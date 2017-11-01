const
  dotenv = require('dotenv').load(),
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/general-assembly'
  PORT = process.env.PORT || 3001,
  userRoutes = require('./routes/users')
//

mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || `Connected to MongoDB.`)
});

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api', (req, res) => {
    res.json({message: 'API ROOT'})
})

app.use('/api/users', userRoutes)

app.listen(PORT, (err) => {
    console.log(err || `Listening on port 🔥 ${PORT}`)
})
