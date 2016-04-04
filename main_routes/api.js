//all app controllers are in here
var
	express = require('express'),
	apiRouter = express.Router(),
	apiCtrl = require('../controllers/api.js')


apiRouter.route('/register')
	.post(apiCtrl.create)

apiRouter.route('/authenticate')
	.post(apiCtrl.authenticate)

module.exports = apiRouter
