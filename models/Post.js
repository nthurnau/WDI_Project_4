var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

var postSchema = new Schema ({
  title: String,
  body: String,
  admin: ({type: Schema.Types.ObjectId, ref:"Admin"})
})

var Post = mongoose.model('Post', postSchema)

module.exports = Post
