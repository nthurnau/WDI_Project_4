var
  mongoose = require('mongoose'),
  // bcrypt = require('bcrypt-nodejs'),
  Schema = mongoose.Schema

var customerSchema = new Schema ({
  fname: String,  //first name
  lname: String,    //last name
  streetAddress: String,
  city: String,
  state: String,
  zip: String,
  phoneNumber: Number,
  email: String,
  active: Boolean
})
//if using authentication for customers, add this back in later
// customerSchema.methods.generateHash = function(password){
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
// }
// customerSchema.methods.validPassword = function(password){
//   return bcrypt.compareSync(password, this.password)
// }

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
