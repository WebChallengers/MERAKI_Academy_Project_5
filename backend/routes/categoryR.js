const express = require("express");
const { categoryFunc } = require("../controllers/category");
const categoryRouter = express.Router();
//main route is /category
searchRouter.get("/:Category", categoryFunc);
module.exports = categoryRouter;
