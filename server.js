var
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	apiRoutes = require('./main_routes/api.js')

mongoose.connect('mongodb://localhost/style_guide', function(err){
	if(err) return console.log('Error connecting')
	console.log('Connected to MongoDB (style_guide)! Boom!')
})
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

//main route
app.get('/', function(req, res){
  res.send("this is the home route! yah!")
})

// app.get('/', function(req,res){
// 	res.sendFile(path.join(__dirname, 'public/index.html'))
// })

app.use('/api', apiRoutes)


app.listen(3000, function(){
	console.log('Server running on 3000. Everything is good!')
})

//in order to test in postman localhost:3000/api/admins
