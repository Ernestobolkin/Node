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
} = {}) => {
  try {
    const restaurant = await Restaurant.create({
      name,
      address,
      cuisineType,
      isKosher,
      reviews,
    });

    console.log(restaurant);
  } catch (err) {
    console.log(err.message);
  }
};

createRestaurant({
  name: "Shani's Restaurant",
  address: {
    city: "Haifa",
    street: "ssss",
    coordinates: [-77, 564, 40.67],
  },
  cuisineType: "test",
  isKosher: false,
  reviews: [
    ["December 8, 2003 02:24:00", 1],
    ["December 18, 1993 02:24:00", 0],
    ["December 18, 1993 02:24:00", 0],
  ],
});