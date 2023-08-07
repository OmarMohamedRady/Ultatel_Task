//#region requires
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const studentRoutes = require("./Routes/StudentRoutes");
//#end region

//#region config
const app = express();
const PORT = process.env.PORT || 7005;
dotenv.config();
//#end region

//#region Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//#end region

// #region Database Connection
mongoose.connect(process.env.DATABASE);
mongoose.connection.on("connected", () => {
  console.log("Connected to DataBase Successfully");
});
// #end region

//#region
app.use("/students", studentRoutes);
//#end region

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
