const { PostingTask } = require("../dbOperation/AddPostTweet")

const Posting = (req,res)=>{
    console.log("/confess")
    PostingTask(req.body).then(resp=>{
        res.send(resp)
    })

}

module.exports = {
    Posting
}