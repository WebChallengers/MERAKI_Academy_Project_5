const connection = require("../database/db");
const db = require("../database/db");

const search = (req, res) => {
  const Product_Name = req.params.Product_Name;
  const query = `select * from products where Product_Name =${
    '"' + Product_Name + '"'
  }`;
  const data = [Product_Name];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(404).json({ success: false, message: "No result", err });
    } else if (result) {
      res
        .status(200)
        .json({ success: true, message: "All results", result: result });
    }
  });
};
module.exports = { search };
