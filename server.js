 const express = require('express');
 const mongoose = require("mongoose");

 require("dotenv").config();






 

 const app = express();







 app.get("/ping", (req, res)=>{
    
    res.send("ping pong");
 })









 

 app.listen(8080, async()=>{
    try{
      await mongoose.connect(process.env.Mongo_URI);
      console.log("Server connected successfully");

    }catch(error){
      console.log(error)
    }
 })