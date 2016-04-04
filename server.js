var
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	flash = require('connect-flash'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	passport = require('passport'),
	passportConfig = require('./config/passport.js'),
	path = require('path'),
	bodyParser = require('body-parser'),
	apiRoutes = require('./main_routes/api.js')

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
app.use(session({
	secret: "bilqis",
	cookie: {_expires: 60000}
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//main route
app.get('/', function(req, res){
  res.send("this is the home route! yah!")
})
//will become main route
// app.get('/', function(req,res){
// 	res.sendFile(path.join(__dirname, 'public/index.html'))
// })

app.use('/api', apiRoutes)


app.listen(3000, function(){
	console.log('Server running on 3000. Everything is good!')
})

//in order to test in postman localhost:3000/api/admins
