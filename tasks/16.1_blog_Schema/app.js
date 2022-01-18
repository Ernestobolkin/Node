const { connect } = require("mongoose");
const User = require("./postSchema");
const usersArray = require("./users")

connect(
  "mongodb://localhost/dataTest",
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);

const createUser = async () => {
  try {
    const data = await User.create(usersArray);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
createUser()


