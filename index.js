const express  = require("express")

const app  = express();



app.listen(Config.port,()=>{
    console.log("Listening port ",Config.port)
})