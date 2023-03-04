const mongoose = require("mongoose")

const Model = new mongoose.Schema({
    message:{
        type:String,
        Required:true
    }
},{timestamps:true})

let TweetModel = mongoose.model("PostModel",Model)

module.exports = {TweetModel}
