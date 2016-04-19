var
	Product = require('../models/Product.js'),
	express = require('express'),
	app = express()

module.exports = {
//create a product is in the admin.js file because a user creates a product
//show a blog Product	
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
