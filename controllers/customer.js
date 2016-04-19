var
	Customer = require('../models/Customer.js'),
	express = require('express'),
	app = express()

module.exports = {
  index: function(req, res){
    Customer.find({}, function(err, customers){
      if(err) throw err
      res.json(customers)
    })
  },
  create: function(req,res){
		var newCustomer = new Customer(req.body)
		  newCustomer.save(function(err, customer){
			if(err) return console.log(err)
			res.json({success: true, message: "Customer created!", customer: customer})
		})
	},
  show: function(req, res){
    Customer.findById(req.params.id, function(err, customer){
      if(err) throw err
      res.json(customer)
    })
  },
  update: function(req, res){
    Customer.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, customer){
      if(err) throw err
      res.json({success: true, message: "Customer updated!", customer: customer})
    })
  },
  delete: function(req, res){
    Customer.findOneAndRemove({_id: req.params.id}, function(err){
      if(err) throw err
      res.json({success: true, message: "Customer deleted"})
    })
  }
}
