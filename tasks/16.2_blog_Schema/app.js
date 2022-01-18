const { connect } = require("mongoose");
const User = require("./postSchema");
const usersArray = require("./users");
const chalk = require("chalk");

// 1. Create and connect to your mongo server
connect(
  "mongodb://localhost/dataTest",
  () => {
    console.log(chalk.yellow("mongoDB connected"));
  },
  (e) => console.error(e)
);

// 2. Create at least two users.
const createUser = async () => {
  try {
    const data = await User.create(usersArray);
    console.log(data);
    console.log(chalk.green("User Was Successfully Created"));
  } catch (e) {
    console.log(e);
  }
};
// createUser()

// 3. Create at least two posts
const createPost = async ({ email, post }) => {
  try {
    const filter = { "details.email": email };
    const update = {
      posts: {
        post,
      },
    };
    const data = await User.findOneAndUpdate(filter, update);
    console.log("Post Was Successfully Created");
  } catch (e) {
    console.log(e);
  }
};
// createPost({
//   email: "ernest@gmail.com",
//   post: "Hey, My Name Is Ernest",
// });
// createPost({
//   email: "Shaked@gmail.com",
//   post: "Hey, My Name Is Shaked",
// });
// createPost({
//   email: "Daniel@gmail.com",
//   post: "Hey, My Name Is Daniel",
// });

// 4. Create at least 1 comment on a post.
const createComment = async ({ postOwner, emailOfCommentor, content }) => {
  try {
    const filter = { "details.email": postOwner };
    const update = {
      $push: { "posts.comments": { content, email: emailOfCommentor } },
    };
    const data = await User.findOneAndUpdate(filter, update);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

// createComment({
//   postOwner: "ernest@gmail.com",
//   emailOfCommentor: "Shaked@gmail.com",
//   content: "Banana",
// });
// createComment({
//   postOwner: "Shaked@gmail.com",
//   emailOfCommentor: "Daniel@gmail.com",
//   content: "I Love Regex",
// });
// createComment({
//   postOwner: "Daniel@gmail.com",
//   emailOfCommentor: "ernest@gmail.com",
//   content: "I Need Help",
// });
