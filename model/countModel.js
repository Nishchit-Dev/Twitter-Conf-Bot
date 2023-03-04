const { default: mongoose } = require("mongoose");

const countSchema = new mongoose.Schema(
  {
    visit: Number,
    revisit: Number,
  },
  {
    timestamps: true,
  }
);

const countCollections = mongoose.model("countCollections", countSchema);

module.exports = countCollections;
