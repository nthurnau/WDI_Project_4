var
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../models/Admin.js')

passport.serializeUser(function(admin, done){
  done(null, admin.id)
})

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, admin){
    done(err, admin)
  })
})
//no local signup because there's only one Admin, who can then add another admin and set up their account later

//local login strategy for admin
passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
  User.findOne({'local.email': email}, function(err, admin){
    if(err) return done(err)
    if(!admin) return done(null, false, req.flash('loginMessage', "No admin found..."))
    if(!admin.validPassword(password)) return done(null, false, req.flas('loginMessage', "Incorrect Password, try again."))
    return done(null, admin)
  })
}))
module.exports = passport 
