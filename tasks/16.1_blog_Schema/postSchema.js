const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  userId: String,
  comment: String,

})

const postSchema = new Schema({
  
})