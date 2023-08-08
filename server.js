const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const path = require('path');

//rest object
const app = express();

//routes
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require('./routes/blogRoutes')

//config
dotenv.config();

//Database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

//rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//PORT
const PORT = process.env.PORT || 5050;

//listen
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} mode on PORT ${PORT}`
      .bgMagenta.white
  );
});
