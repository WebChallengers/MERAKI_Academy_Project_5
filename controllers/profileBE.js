const connection = require("../database/db");
const db = require("../database/db");

const profile = (req, res) => {
  const userId = req.params.userId;
  const query = `select Username,Phone_number,email,profileImg from users where id=${userId}`;
  const data = [userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      console.log(result);
      res
        .status(200)
        .json({ success: true, message: "User Information", result: result });
    }
  });
};
const profileImage = (req, res) => {
  const profileImg = req.body.img;
  console.log("PROFILE IMAGE : ", profileImg);
  const userId = req.params.userId;
  const data = [profileImg];
  const query = `update users set profileImg=? where id=${userId} `;
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      console.log(result);
      res
        .status(200)
        .json({ success: true, message: "User picture", result: result });
    }
  });
};
module.exports = { profile, profileImage };
