var
	Post = require('../models/Post.js'),
	express = require('express'),
	app = express()

module.exports = {

//show a blog Post
  show: function(req, res){
    Post.findById(req.params.id, function(err, post){
      if(err) throw err
      res.json(post)
    })
  }

}
