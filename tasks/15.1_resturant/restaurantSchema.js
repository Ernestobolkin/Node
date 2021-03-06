const mongoose = require("mongoose");

const addresSchema = new mongoose.Schema({
  city: String,
  street: String,
  coordinates: [Number],
})


const restaurantSchema = new mongoose.Schema({
  name: String,
  address: addresSchema,
  cuisineType: String,
  isKosher: Boolean,
  reviews: [[String, Number]],
  testmongoDb: String,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
