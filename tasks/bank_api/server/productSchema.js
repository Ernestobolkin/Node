const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  credit:{
    type:Number,
    default:0,
    min:0,
    required: true,
  },
  cash:{
    type:Number,
    default:0,
    min:0,
    required: true,
  }
});

const User = model("products", userSchema);

module.exports = User;
