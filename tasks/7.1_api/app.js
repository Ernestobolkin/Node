import { createRequire } from "module";
const require = createRequire(import.meta.url);

const axios = require("axios");
const request = require("request");
import fetch from "node-fetch";

// 1
const getData = async () => {
  const { data } = await axios.get("https://api.fbi.gov/wanted/v1/list");
  console.log(data);
};
getData();

// 2
request("https://api.fbi.gov/wanted/v1/list", (err, res, body) => {
  console.log(JSON.parse(body));
});

//

fetch("https://api.fbi.gov/wanted/v1/list")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
