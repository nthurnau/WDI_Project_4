// api controller for Admin
var
	Admin = require('../models/Admin.js')

module.exports = {

	// list all admins
	index: function(req,res){
		Admin.find({}, function(err, admins){
			if(err) return console.log(err)
			res.json(admins)
		})
	},

	// create new admin
	create: function(req,res){
		Admin.create(req.body, function(err, admin){
			if(err) return console.log(err)
			res.json({success: true, message: "Admin created!", admin: admin})
		})
	},

	// show specific admin
	show: function(req,res){
		Admin.findOne({_id: req.params.id}, function(err, admin){
			if(err) return console.log(err)
			res.json(admin)
		})
	},
  // update an admin
  update: function(req,res){
    Admin.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, admin){
      if(err) return console.log(err)
      res.json({success: true, message: "Admin updated!", admin: admin})
    })
  },
  // delete an admin
	delete: function(req,res){
		Admin.findOneAndRemove({_id: req.params.id}, function(err){
			if(err) return console.log(err)
			res.json({success: true, message: "Admin Deleted!"})
		})
	} 

}
