const mongoose = require("mongoose");
const Restaurant = require("./restaurantSchema");

mongoose.connect(
  "mongodb://localhost/findMyRestaurant",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);

const createRestaurant = async ({
  name = "",
  address = ({ city = "", street = "", coordinates = [] } = {}),
  cuisineType = "",
  isKosher = false,
  reviews = [],
  testmongoDb = "",
} = {}) => {
  try {
    const restaurant = await Restaurant.create({
      name,
      address,
      cuisineType,
      isKosher,
      reviews,
      testmongoDb,
    });
    console.log(restaurant);
    restaurant.save();
  } catch (err) {
    console.log(err.message);
  }
};


