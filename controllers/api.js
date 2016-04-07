// api controller for Admin
var
	Admin = require('../models/Admin.js'),
	jwt = require('jsonwebtoken'),
	express = require('express'),
	bcrypt = require('bcrypt-nodejs'),
	config = require('../config.js'),
	Post = require('../models/Post.js')


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
			var token = jwt.sign(newAdmin.toObject(), config.secret, {
				expiresInMinutes: 1440
			})
			res.json({
				success: true,
				message: "Successfully registered, you have a token!",
				token: token
			})
		})
	},
	//authenticate the user by way of checking their token
	authenticate: function(req, res){
		console.log(req.body)
		Admin.findOne({name: req.body.name}, function(err, admin){
			if(err) throw err
			//User not found
			if(!admin){
				res.json({success: false, message: "Admin not found"})
			}else if(admin){
				//password doesn't match
				if(!admin.validPassword(req.body.password)){
					res.json({success: false, message: "Incorrect password"})
				}else {
					//The admin was found and the password matches
					var token = jwt.sign(admin.toObject(), config.secret, {
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
//this checks and verifies a token before someone can use parts of the site
	// protect: function(req, res, next){
	// 	var token = req.body.token || req.query.token || req.body.headers['x-access-token']
	// 	if(token){
	// 		jwt.verify(token, config.secret, function(err, decoded){
	// 				return res.json({success: false, message:"You need a token to access that part of the site. Sorry not sorry."})
	// 				req.decoded = decoded
	// 				next()
	// 		})
	// 	} else {
	// 		return res.status(403).json({success: false, message: No Token Provided})
	// 	}
	// },

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
	},
	//assosciating a new post with an admin and also creating a post
	post: function(req, res){
		Admin.findById(req.params.id, function(err, admin){
			console.log(admin.posts)
			if(err) throw err
			newPost = new Post(req.body)
			newPost.admin = admin
			newPost.save(function(err, post){
				if(err) throw err
				admin.posts.push(post)
				admin.save(function(err, admin){
					if(err) throw err
					res.json({success: true, message: "post saved!", post: post})
				})
			})
		})
	},
	//add a new product to the store
	add: function(req, res){
		Admin.findById(req.params.id, function(err, admin){
			console.log(admin.products)
			if(err) throw err
			newProduct = new Product(req.body)
			newProduct.admin = admin
			newProduct.save(function(err, product){
				if(err) throw err
				admin.products.push(product)
				admin.save(function(err, admin){
					if(err) throw err
					res.json({success: true, message: "product saved!", product: product})
				})
			})
		})
	}

}
