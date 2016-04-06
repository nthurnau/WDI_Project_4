//all app controllers are in here
var
	express = require('express'),
	apiRouter = express.Router(),
	apiCtrl = require('../controllers/api.js')


apiRouter.route('/authenticate')
		.post(apiCtrl.authenticate)

apiRouter.route('/register')
	.post(apiCtrl.create)



module.exports = apiRouter
