const connection = require("../database/db");
const db = require("../database/db");

const getAllOrders = (req, res) => {
  const query = `select * from orders`;

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      console.log(result);
      res
        .status(200)
        .json({ success: true, message: "All orders", result: result });
    }
  });
};

//================================================================================

const addOrders = (req, res) => {
  const {
    Product_Name,
    Product_Price,
    Product_Description,
    Category,
    product_id,
  } = req.body;
  const query = `insert into orders (Product_Name, Product_Price, Product_Description, product_id) values (?,?,?,?)`;
  const data = [
    Product_Name,
    Product_Price,
    Product_Description,
    product_id,
    Category,
  ];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: `${Product_Name} was added`,
        result: result,
      });
    }
  });
};
const deleteOrderById = (req, res) => {
  const orderId = req.params.order_id;

  const query = `delete from orders where id=${orderId}`;
  const query2 = `select * from orders where id =${orderId}`;
  const data = [orderId];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: query2 + " was deleted",
        // message: `${Product_Name} was added`,
        result: result,
      });
    }
  });
};

module.exports = { getAllOrders, addOrders, deleteOrderById };

//get checkout ordersFunctions
