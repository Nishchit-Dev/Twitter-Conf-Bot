const { default: mongoose } = require("mongoose");

const countSchema = new mongoose.Schema({
  visite: Number,
  revisite: Number,
});

const countCollections = mongoose.model("countCollections", countSchema);

module.exports = countCollections;
