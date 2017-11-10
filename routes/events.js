const
  express = require('express'),
  eventRouter = new express.Router(),
  http = require('request')
//

eventRouter.get('/', (req, res) => {
    var api = 'http://api.eventful.com/rest/events/search?...&keywords=general+assembly&location=Santa+Monica&date=Future'
    http.get(api, (err, response, body) => {
        res.json(body)
    })
})

module.exports = eventRouter