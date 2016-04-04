var
	express = require('express'),
	adminRouter = express.Router(),
	apiCtrl = require('../controllers/api.js')

adminRouter.route('/')
	.get(apiCtrl.index)
	// .post(apiCtrl.create)

adminRouter.route('/:id')
	.get(apiCtrl.show)
  .patch(apiCtrl.update)
  .delete(apiCtrl.delete)

module.exports = adminRouter
