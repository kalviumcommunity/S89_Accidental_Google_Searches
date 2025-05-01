const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(express.json());


const corsOptions = {
  origin: 'http://localhost:5173', 
  credentials: true,
};
app.use(cors(corsOptions));


const router = require("./router");


app.use("/userDetails", router);


app.get("/", (req, res) => {
  res.send({ msg: "API is running correctly" });
});


app.listen(8080, async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("Server connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
});
