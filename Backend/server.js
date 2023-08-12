//#region requires
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const studentRoutes = require("./Routes/StudentRoutes");
const swaggerJSDoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:7005",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJSDoc(options);
//#end region

//#region config
const app = express();
const PORT = process.env.PORT || 7005;
dotenv.config();
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
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
