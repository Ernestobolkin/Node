const usersArray = [
  {
    details: {
      firstName: "Ernest",
      lastName: "Tobolkin",
      email: "ernest@gmail.com",
    },
    posts: {
      post: "Hello world",
      comments: [
        {
          userId: "",
          content: "",
        },
      ],
      likes: 0,
    },
  },
  {
    details: {
      firstName: "Shaked",
      lastName: "Benratzon",
      email: "Shaked@gmail.com",
    },
    posts: {
      post: "Banana",
      comments: [
        {
          userId: "",
          content: "",
        },
      ],
      likes: 0,
    },
  },
  {
    details: {
      firstName: "Daniel",
      lastName: "Shamir",
      email: "Daniel@gmail.com",
    },
    posts: {
      post: "Hello world, My Name is Daniel",
      comments: [
        {
          userId: "",
          content: "",
        },
      ],
      likes: 0,
    },
  }
]

module.exports = usersArray