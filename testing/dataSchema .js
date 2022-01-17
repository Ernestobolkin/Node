const { Schema, model } = require("mongoose");

const addresSchema = new Schema({
  city: String,
  street: String,
  coordinates: [Number],
});

const restaurantSchema = new Schema({
  name: String,
  address: addresSchema,
  cuisineType: String,
  isKosher: Boolean,
  reviews: [[String, Number]],
  testmongoDb: String,
});

const userSchema = new Schema({
  name: String,
  age: Number,
});

const User = model("users", userSchema);

const Restaurant = model("Restaurant", restaurantSchema);

// module.exports = model("Restaurant", restaurantSchema, "Users", userSchema);

module.exports = { User, Restaurant };
// module.exports = mongoose.model("Res", restaurantSchema);
