 const express = require('express');
 const mongoose = require("mongoose");






 

 const app = express();







 app.get("/ping", (req, res)=>{
    
    res.send("ping pong");
 })









 

 app.listen(8080, async()=>{
    try{
      await mongoose.connect("mongodb+srv://kondurihemanth62:v9TVxQDsjQJTDdAC@cluster0.tlfsv.mongodb.net/");
      console.log("Server connected successfully");

    }catch(error){
      console.log(error)
    }
 })