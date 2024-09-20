require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const connectDB = require("./config/mongodb");
const indexRoutes = require("./routes/index.routes");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/products.routes");

/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVkNDM3NDFkODk1MzQzM2I5MzY2OWQiLCJpYXQiOjE3MjY4MjUzMzIsImV4cCI6MTcyNjgyODkzMn0.gS03rWlIHzA1nNisnmM-IOxovCphk2Q8ICqUW7P7OpQ */
/* backend-domination.appspot.com */


connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);




app.listen(3000, () => {
    console.log("server is running on port 3000");
})
