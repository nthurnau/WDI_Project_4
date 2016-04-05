var
	express = require('express'),
	adminRouter = express.Router(),
	apiCtrl = require('../controllers/api.js')

adminRouter.route('/')
	.get(apiCtrl.index)

adminRouter.route('/:id')
	.get(apiCtrl.show)
  .patch(apiCtrl.update)
  .delete(apiCtrl.delete)

adminRouter.route('/:id/posts')
	.post(apiCtrl.post)

module.exports = adminRouter
