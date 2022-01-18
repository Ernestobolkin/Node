const { Schema, model } = require("mongoose");
const validator = require("validator")

const commentSchema = new Schema({ userId: String, content: String });

const postSchema = new Schema({
  post: String,
  comments: [commentSchema],
  likes: Number,
});

const detailsSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function (value) {
      return validator.isEmail(value);
    },
  },
});

const userSchema = new Schema({
  details: detailsSchema,
  posts: postSchema,
});

const User = model("users", userSchema);

module.exports = User;
