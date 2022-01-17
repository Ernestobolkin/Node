const chalk = require("chalk");
const mongoose = require("mongoose");
const { User, Restaurant } = require("./dataSchema ");

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
    console.log(chalk.bgMagenta("=============="));
    console.log(restaurant);
    console.log(chalk.bgMagenta("=============="));
    restaurant.save();
  } catch (err) {
    console.log(chalk.red(err));
  }
};

const createUser = async () => {
  try {
    const user = await Restaurant.create({
      name: "Shaked",
      age: 25,
    });
    await users.save();
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};
// createUser();

const findById = async () => {
  try {
    const user = await Restaurant.find({reviews:{$elemMatch:[["December 8, 2003 02:24:00"]]}});
    console.log(user);
    console.log(
      chalk.yellow("================================================")
    );
  } catch (e) {
    console.log(e.message);
  }
};
// db.restaurants.find({reviews : { $elemMatch:{"date":{$gte : "22-10-2022"}}}})';
findById();
// PersonModel.find({ favouriteFoods: { "$in" : ["sushi"]} }, ...)

// createRestaurant({
//   name: "mc",
//   address: {
//     city: "haifa",
//     street: "ssssasdss",
//     coordinates: [-77, 564, 40.67],
//   },
//   cuisineType: "veg",
//   isKosher: true,
//   reviews: [
//     ["December 8, 2003 02:24:00", 1],
//     ["December 18, 1993 02:24:00", 0],
//     ["December 18, 1993 02:24:00", 0],
//   ],
//   testmongoDb: "hello world ",
// });
