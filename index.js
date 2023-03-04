const express  = require("express")
const Config = require("./tempEnv").Config  
const app  = express();


app.listen(Config.port,()=>{
    console.log("Listening port ",Config.port)
})