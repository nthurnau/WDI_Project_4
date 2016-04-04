var
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  Schema = mongoose.Schema

var adminSchema = new Schema ({
  name: String,
  email: String,
  password: String,
  admin: Boolean,
  posts: ({type: Schema.Types.ObjectId, ref:"Post"}),
  products: ({type: Schema.Types.ObjectId, ref: "Product"})
})

adminSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}
adminSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

var Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
