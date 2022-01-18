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

const test = async () => {
  try{
    const user = await Restaurant.find().count();
    console.log(user);
    
  }catch(e){
    console.log(e);
  }
};

test()

createRestaurant({
  name: "hello asdasdasd world",
  address: {
    city: "tesasdt",
    street: "ssssasdss",
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
