const
  express = require('express'),
  usersRouter = new express.Router(),
  usersCtrl = require('../controllers/users'),
  verifyToken = require('../serverAuth').verifyToken
//

usersRouter.route('/')
  .get(usersCtrl.index)
  .post(usersCtrl.create)
//

usersRouter.post('/auth', usersCtrl.authenticate)

usersRouter.route('/:id')
  .all(verifyToken)
  .get(usersCtrl.show)
  .patch(usersCtrl.update)
  .delete(usersCtrl.destroy)

module.exports = usersRouter