const mongoose = require("mongoose");

const Model = new mongoose.Schema(
  {
    message: {
      type: String,
      Required: true,
    },
  },
  { timestamps: true }
);

const _Model = new mongoose.Schema(
  {
    message: {
      type: String,
      Required: true,
    },
  },
  { timestamps: true }
);

let TweetModel = mongoose.model("PostModel", Model);
let StoreTweetModel = mongoose.model("Tweets",_Model);

module.exports = { TweetModel,StoreTweetModel };
