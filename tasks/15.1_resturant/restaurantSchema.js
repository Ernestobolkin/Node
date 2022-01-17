const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
  coordinates: [Number]
})

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: addressSchema,
  cuisineType: String,
  isKosher: Boolean,
  reviews: [[String, Number]]
})

module.exports = mongoose.model("Restaurant", restaurantSchema);