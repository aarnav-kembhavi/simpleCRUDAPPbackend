const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from arnam");
});

mongoose
  .connect(
    "mongodb+srv://aarnavkembhavi:indrajit1974@backenddb.a8f5q.mongodb.net/?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server running at port 3000");
    });
  })
  .catch(() => console.log("connection failed"));
