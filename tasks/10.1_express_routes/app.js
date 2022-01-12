import express from "express";
import chalk from "chalk";

const app = express();
const port = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello    World");
});

app.post("/users", (req, res) => {
  const { data } = req.body;
  const sendBody = {
    response: "success using post",
    routeName: "POST",
    body: {
      data,
    },
  };
  res.send(sendBody);
// post by user:
//   "data": [
//     {
//         "name": "Ernest",
//         "id": "id1"
//     },
//     {
//         "name": "Daniel",
//         "id": "id2"
//     },
//     {
//         "name": "Shaked",
//         "id": "id3"
//     }
// ]

// response by server:
// {
//   "response": "success using post",
//   "routeName": "POST",
//   "body": {
//       "data": [
//           {
//               "name": "Ernest",
//               "id": "id1"
//           },
//           {
//               "name": "Daniel",
//               "id": "id2"
//           },
//           {
//               "name": "Shaked",
//               "id": "id3"
//           }
//       ]
//   }
// }
});

app.put("/put", (req, res) => {
  const { name, id } = req.body;
  const sendBody = {
    response: "success using put",
    routeName: "put",
    body: {
      name,
      id,
    },
  };
  res.send(sendBody);
// put by user :
// {"name":"Shaked","id":"id3"}

// response by server:
// {
//   "response": "success using put",
//   "routeName": "put",
//   "body": {
//       "name": "Shaked",
//       "id": "id3"
//   }
// }
});

app.delete("/delete", (req, res) => {
  const { name, id } = req.body;
  const sendBody = {
    response: "success using delete",
    routeName: "delete",
    body: {
      name,
      id,
    },
  };
  res.send(sendBody);

// delete by user:
// {"name":"Shaked","id":"id3"}

// response by server:
// {
//   "response": "success using delete",
//   "routeName": "delete",
//   "body": {
//       "name": "Shaked",
//       "id": "id3"
//   }
// }
});

app.listen(port, () => {
  console.log(chalk.yellow("Server is up on port"), chalk.green.inverse(port));
});


