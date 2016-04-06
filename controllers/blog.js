var
	Post = require('../models/Post.js'),
	express = require('express'),
	app = express()

module.exports = {
//create a post is in the admin.js file because a user creates a post
//show a blog Post
  show: function(req, res){
    Post.findById(req.params.id, function(err, post){
      if(err) throw err
      res.json(post)
    })
  },
  //shows all blog posts
  index: function(req, res){
    Post.find({}, function(err, posts){
      if(err) throw err
      res.json(posts)
    })
  },
  //update a post
  update: function(req, res){
    Post.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, post){
      if(err) throw err
      res.json({success: true, message: "Blog Post updated!", post: post})
    })
  },
  // delete a post
  delete: function(req, res){
    Post.findOneAndRemove({_id: req.params.id}, function(err){
      if(err) throw err
      res.json({success: true, message: "Post deleted"})
    })
  }

}
