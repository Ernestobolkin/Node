const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    city: String,
    street: String,
    coordinates: [Number],
  },
  cuisineType: String,
  isKosher: Boolean,
  reviews: [[String, Number]],
  testmongoDb: String,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
