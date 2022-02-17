const express = require("express");
const { search } = require("../controllers/search");
const searchRouter = express.Router();
//main route is /search
searchRouter.get("/:Product_Name", search);
module.exports = searchRouter;
