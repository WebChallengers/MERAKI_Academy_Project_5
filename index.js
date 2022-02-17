const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());
const path = require("path");

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
const PORT = 5000;

// Import Routers
const categoryRouter = require("./routes/categoryR");
const searchRouter = require("./routes/searchR");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");
const ordersRouter = require("./routes/orders");
const productRouter = require("./routes/product");
const profileRouter = require("./routes/profileR");
const softDelRouter = require("./routes/softDelete");
const exchangeUpdateRouter = require("./routes/updateXchangeR");
// Routes Middleware
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/orders", ordersRouter);
app.use("/product", productRouter);
app.use("/search", searchRouter);
app.use("/category", categoryRouter);
app.use("/profile", profileRouter);
app.use("/softDel", softDelRouter);
app.use("/updateExchange", exchangeUpdateRouter);
app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
//