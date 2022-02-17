const connection = require("../database/db");
const db = require("../database/db");

const categoryFunc = (req, res) => {
  //select all where category =.......
  const categoryType = req.params.Category;
  console.log(categoryType);
  const query = `select * from products where Category= ?`;
  const data = [categoryType];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log("nononononon");
      res.status(500).json({
        success: false,
        message: `Not found`,
        err,
      });
    } else if (result) {
      console.log("ysysysysysys");
      res.status(200).json({
        success: true,
        message: `All products from ${categoryType} category`,
        result: result,
      });
    }
  });
};
module.exports = categoryFunc;
