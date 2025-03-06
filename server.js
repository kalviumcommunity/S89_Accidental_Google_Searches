 const express = require('express');

 const app = express();

 app.get("/ping", (req, res)=>{
    
    res.send("ping pong");
 })

 app.listen(8080, ()=>{
    console.log("server is rinning on port 8080");
 })