var
	express = require('express'),
	customerRouter = express.Router(),
	customerCtrl = require('../controllers/customer.js')

  customerRouter.route('/')
  	.get(customerCtrl.index)
    .post(customerCtrl.create)

  customerRouter.route('/:id')
    .get(customerCtrl.show)
    .patch(customerCtrl.update)
    .delete(customerCtrl.delete)

module.exports = customerRouter
