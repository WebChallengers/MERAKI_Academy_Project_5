const updateExchange = require("../controllers/exchangeUpdate");
const express = require("express");

const exchangeUpdateRouter = express.Router();
exchangeUpdateRouter.put("/:xId", updateExchange);
module.exports = exchangeUpdateRouter;//
