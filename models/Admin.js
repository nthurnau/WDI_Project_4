var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

var adminSchema = new Schema ({
  name: String,
  email: String,
  password: String
})

var Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin 
