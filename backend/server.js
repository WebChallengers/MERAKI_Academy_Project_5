const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");



app.use(cors());

app.use(express.json());

const PORT = 5000;

// Import Routers
const usersRouter = require("./routes/users");

// Routes Middleware
app.use("/register", usersRouter);

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
