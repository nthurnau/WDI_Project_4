var
	express = require('express'),
	productRouter = express.Router(),
	productCtrl = require('../controllers/product.js')

productRouter.route('/')
	.get(productCtrl.index)

productRouter.route('/:id')
  .get(productCtrl.show)
  .patch(productCtrl.update)
//.delete(productCtrl.delete)
// console.log("productctrl",productCtrl.delete)

module.exports = productRouter
