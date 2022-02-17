const sDelete = require("../controllers/softDelete");
const express = require("express");

const softDelRouter = express.Router();
//the main route is /softDel
softDelRouter.post("/:id", sDelete);

module.exports = softDelRouter;
