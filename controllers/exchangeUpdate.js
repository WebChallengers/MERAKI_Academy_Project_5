const connection = require("../database/db");
const { connect } = require("../database/db");
const db = require("../database/db");
const updateExchange = (req, res) => {
  const Product_Exchange = req.params.xId;
  const id = req.body;
  const query = `update products SET Product_Exchange=? where id =?`;
  const data = [Product_Exchange, id];
  connection.query(query, data, (result, err) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "internal server error", result });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "the item was added to the exchange row",
        result: result,
      });
    }
  });
};
module.exports = updateExchange;//
