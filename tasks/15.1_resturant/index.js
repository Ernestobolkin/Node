const chalk = require("chalk")
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
    restaurant.save();
  } catch (err) {
    console.log(chalk.red(err.message));
  }
};

createRestaurant({
  name: "Shaked's Restaurant",
  address: {
    city: "karmiel",
    street: "dimonas street",
    coordinates: [-77, 564, 40.67],
  },
  cuisineType: "test",
  isKosher: false,
  reviews: [
    ["December 8, 2003 02:24:00", 1],
    ["December 18, 1993 02:24:00", 0],
    ["December 18, 1993 02:24:00", 0],
  ],
  testmongoDb: "hello world ",
});
