const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

app.use(express.json());

const router = require("./router");


app.get("/", (req, res)=>{
    return res.send({msg:"This is creating user database"})
})

app.use("/userDetails", router);

 


 app.listen(8080, async()=>{
    try{
      await mongoose.connect(process.env.Mongo_URI);
      console.log("Server connected successfully");

    }catch(error){
      console.log(error)
    }
 })