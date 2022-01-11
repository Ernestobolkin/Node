import { createRequire } from "module";
const require = createRequire(import.meta.url);

const axios = require("axios");
const request = require("request");
import fetch from "node-fetch";

// 1
let data = null;
const getData = async () => {
  data = await axios.get("https://api.fbi.gov/wanted/v1/list");
  // console.log(data.data);
  test();
};
getData();

const test = () => {
  console.log(data);
};

// isTest && console.log(data)

// 2
const requestFunc = () => {
  request("https://api.fbi.gov/wanted/v1/list", (err, res, body) => {
    console.log(JSON.parse(body));
  });
};
// requestFunc();

// 3
const fetchFunc = () => {
  fetch("https://api.fbi.gov/wanted/v1/list")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
// fetchFunc()
