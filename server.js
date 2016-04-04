var
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	cookieParser = require('cookie-parser'),
	path = require('path'),
	bcrypt = require('bcrypt-nodejs'),
	bodyParser = require('body-parser'),
	apiRoutes = require('./main_routes/api.js'),
	adminRoutes = require('./main_routes/admin.js'),
	jwt = require('jsonwebtoken'),
	config = require('./config.js'),
	port = process.env.PORT || 3000
	Admin = require('./models/Admin.js')

//mongoose connection
mongoose.connect('mongodb://localhost/style_guide', function(err){
	if(err) return console.log('Error connecting')
	console.log('Connected to MongoDB (style_guide)! Boom!')
})

//middleware
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('superSecret', config.secret); // secret variable

//main route
// app.get('/', function(req, res){
//   res.send("this is the home route! yah!")
// })

//*****************route middleware that verifies token************
app.use('/api', apiRoutes)
apiRoutes.use(function(req, res, next){
  // check header or url parameters or post parameters for a token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token){
    res.json({
      success: false,
      message: 'You need a token to enter StyleGuides as an admin'});
  } else {
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err){
        return res.json({
          success: false,
          message: 'That token is not legit'
        });
      } else {
        // everything is good with the token, then save it to the req in other routes
        req.decoded = decoded;
        next();
      }
    });
  }
});
app.use('/admins', adminRoutes)
//main route
app.get('*', function(req,res){
	res.sendFile(path.join(__dirname, '/public/index.html'))
})

//*********************** start the server ************************
app.listen(port, function(){
	console.log('Server running on 3000. Everything is good!')
})

//in order to test in postman localhost:3000/api/admins
