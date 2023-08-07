//#region requires
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const studentRoutes = require("./Routes/StudentRoutes");
//#end region

//#region config
const PORT = process.env.PORT || 7005;
const app = express();
//#end region

//#region Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//#end region

//#region
app.use("/students", studentRoutes);
//#end region

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
