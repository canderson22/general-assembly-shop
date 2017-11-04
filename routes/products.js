const
  express = require('express'),
  productsRouter = new express.Router(),
  productsCtrl = require('../controllers/products')
//

productsRouter.route('/')
    .get(productsCtrl.index)
    .post(productsCtrl.create)
//

productsRouter.route('/:id')
    .get()
    .patch()
    .delete()
//

module.exports = productsRouter