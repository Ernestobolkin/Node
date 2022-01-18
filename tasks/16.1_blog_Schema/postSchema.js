const { Schema, model } = require("mongoose");

const commentSchema = new Schema({ userId: String, content: String });

const postSchema = new Schema({
  post: String,
  comments: [commentSchema],
  likes: Number,
});

const detailsSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const userSchema = new Schema({
  details: detailsSchema,
  posts: postSchema,
});


const User = model("users", userSchema);

module.exports = User;
