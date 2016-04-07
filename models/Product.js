var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

var productSchema = new Schema ({
  title: String,
  description: String,
  body: String,
  price: Number,
  image: String,
  amount: Number,
  admin: ({type: Schema.Types.ObjectId, ref:"Admin"})
})

var Product = mongoose.model('Product', productSchema)

module.exports = Product
