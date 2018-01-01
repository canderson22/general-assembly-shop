const
  express = require('express'),
  productsRouter = new express.Router(),
  productsCtrl = require('../controllers/products')
//

productsRouter.route('/')
    .get(productsCtrl.index)
    .post(productsCtrl.create)
//

productsRouter.route('/:_id')
    .get()
    .patch(productsCtrl.update)
    .delete()
//

module.exports = productsRouter