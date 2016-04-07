var
	express = require('express'),
	blogRouter = express.Router(),
	blogCtrl = require('../controllers/blog.js')

  blogRouter.route('/')
  	.get(blogCtrl.index)

  blogRouter.route('/:id')
    .get(blogCtrl.show)
    .patch(blogCtrl.update)
    .delete(blogCtrl.delete)

module.exports = blogRouter
