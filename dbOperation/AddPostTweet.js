const TweetModel = require("../model/ConfessModel").TweetModel;
const joi = require("joi");
const { StoreTweetModel } = require("../model/ConfessModel");
const filter = require("word-blacklist");
let Filter = new filter();

const validate = (data) => {
  const InputSchema = joi.object({
    message: joi.string().min(5).required(),
  });

  return InputSchema.validate(data);
};

async function PostingTask(_data) {
  let data = _data;
  let checkFlag = validate(data).error;

  if (checkFlag) {
    // returning Error if caught
    return {
      message: checkFlag.message,
      flag: false,
    };
  } else {

    // using Filters to Filter through bad-words
    let FilteredMessage = Filter.clean(data.message);
    data["message"] = FilteredMessage;

    // storing tweets on two different collection 
        // 1. one for temp store
        // 2. second for hard store
    let Post = new TweetModel(data);
    let Store = new StoreTweetModel(data);

    // saving the object to store tweet
    await Store.save();
    return await Post.save().then((res) => {
        //  returning object with tweet and timestamps 
        return { res };
    });
  }
}

module.exports = { PostingTask };
