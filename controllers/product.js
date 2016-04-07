var
	Post = require('../models/Post.js'),
	express = require('express'),
	app = express()

module.exports = {
  show: function(req, res){
    Product.findById(req.params.id, function(err, product){
      if(err) throw err
      res.json(product)
    })
  },
  index: function(req, res){
    Product.find({}, function(err, products){
      if(err) throw err
      res.json(products)
    })
  },
  update: function(req, res){
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, product){
      if(err) throw err
      res.json({success: true, message: "Product updated!", product: product})
    })
  },
  delete: function(req, res){
    Product.findOneAndRemove({_id: req.params.id}, function(err){
      if(err) throw err
      res.json({success: true, message: "Product deleted"})
    })
  }
}
