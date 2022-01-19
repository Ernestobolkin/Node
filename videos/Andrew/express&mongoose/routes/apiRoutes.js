const express = require("express");

const apiRouter = express.Router();

apiRouter.get("/users", getllSortUsers);