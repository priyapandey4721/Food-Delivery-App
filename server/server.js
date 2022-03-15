const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const app = express();
const path = require("path");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "./src/")));
const connectDB = require("./config/DatabaseConnection");
connectDB();

const UserRouter = require("./routes/UserRoutes");
app.use("/api/fooddelivery", UserRouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is Working on ${port}`);
});
