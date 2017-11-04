const
  express = require('express'),
  productsRouter = new express.Router()
//

productsRouter.route('/')
    .get()
    .post()
//

productsRouter.route('/:id')
    .get()
    .patch()
    .delete()
//

module.exports = productsRouter