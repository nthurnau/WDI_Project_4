// api controller for Admin
var
	Admin = require('../models/Admin.js'),
	jwt = require('jsonwebtoken'),
	express = require('express'),
	app = express(),
	bcrypt = require('bcrypt-nodejs'),
	config = require('../config.js')

app.set('superSecret', config.secret); // secret variable

module.exports = {
	//register/create authorized admin
	create: function(req, res){
		console.log(req.body);
		var newAdmin = new Admin({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			admin: true
		})
		newAdmin.password = newAdmin.generateHash(newAdmin.password)
		newAdmin.save(function(err){
			if(err) throw err

			console.log("Admin saved successfully")
			var token = jwt.sign(newAdmin.toObject(), app.get('superSecret'), {
				expiresInMinutes: 1440
			})
			res.json({
				success: true,
				message: "Successfully registered, you have a token!",
				token: token
			})
		})
	},
	//authenticate the use by way of checking their token
	authenticate: function(req, res){
		console.log(req.body)
		Admin.findOne({name: req.body.name}, function(err, admin){
			if(err) throw err
			//User not found
			if(!admin){
				res.json({success: false, message: "Admin not found"})
			}else if(admin){
				//password doesn't match
				if(admin.password !=req.body.password){
					res.json({success: false, message: "Incorrect password"})
				}else {
					//The admin was found and the password matches
					var token = jwt.sign(admin, app.get('superSecret'), {
						expiresInMinutes: 1440
					})
					res.json({
						success: true,
						message: 'Enjoy your token',
						token: token,
						admin: admin
					})
				}
			}
		})
	},

	// list all admins
	index: function(req,res){
		Admin.find({}, function(err, admins){
			if(err) return console.log(err)
			res.json(admins)
		})
	},
	// // create new admin
	// create: function(req,res){
	// 	Admin.create(req.body, function(err, admin){
	// 		if(err) return console.log(err)
	// 		res.json({success: true, message: "Admin created!", admin: admin})
	// 	})
	// },
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
