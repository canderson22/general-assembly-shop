const
  express = require('express'),
  usersRouter = new express.Router(),
  usersCtrl = require('../controllers/users')
//

usersRouter.route('/')
  .get(usersCtrl.index)
  .post(usersCtrl.create)
//

module.exports = usersRouter