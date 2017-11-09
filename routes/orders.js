const 
    express = require('express'),
    orderRouter = new express.Router(),
    orderCtrl = require('../controllers/orders')
//


orderRouter.route('/')
  .get(orderCtrl.index)
  .post(orderCtrl.create)
//

orderRouter.post('/charge', orderCtrl.charge)


module.exports = orderRouter