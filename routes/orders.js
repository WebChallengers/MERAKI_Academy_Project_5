const {
  getAllOrders,
  addOrders,
  deleteOrderById,
} = require("../controllers/orders");

const express = require("express");

const ordersR = express.Router();

//the main route is "/orders"
ordersR.get("/all", getAllOrders);
ordersR.post("/add", addOrders);
ordersR.delete("/del/:order_id", deleteOrderById);
// ordersR.post("add",)
module.exports = ordersR;
//branch name ordersRouter
