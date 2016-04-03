//all app controllers are in here
var
	express = require('express'),
	apiRouter = express.Router(),
	apiCtrl = require('../controllers/api.js')

apiRouter.route('/admins')
	.get(apiCtrl.index)
	.post(apiCtrl.create)

apiRouter.route('/admins/:id')
	.get(apiCtrl.show)
  .patch(apiCtrl.update)
  .delete(apiCtrl.delete)

module.exports = apiRouter
