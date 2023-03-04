const TweetModel = require('../model/ConfessModel').TweetModel;
const joi = require('joi')

const validate = (data)=>{
    const InputSchema = joi.object({
        message:joi.string().required()
    })
    
    return InputSchema.validate(data)
}

async function PostingTask(data){
    let checkFlag = validate(data).error 

    if(checkFlag){
        return {
            message:checkFlag.message,
            flag:false
        }
    }else{

        let Post = new TweetModel(data)

        return await Post.save().then(res=>{
            return { Post }
        })

    }

}


module.exports={}