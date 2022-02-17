const connection = require("../database/db");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const createNewUser = async (req, res) => {
  const { Username, Phone_number, password, email, profileImg } = req.body;

  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const query = `INSERT INTO users (Username, Phone_number, password, email) VALUES (?,?,?,?)`;
  const data = [Username, Phone_number, encryptedPassword, email];
  connection.query(query, data, (err, results) => {
    if (err) {
      res.status(409).json({
        success: false,
        massage: "The email already exists .",
        err: err,
      });
    }

    res.status(200).json({
      success: true,
      massage: "User has been added successfully",
      results: results,
    });
  });
};

//hi
module.exports = {
  createNewUser,
};
