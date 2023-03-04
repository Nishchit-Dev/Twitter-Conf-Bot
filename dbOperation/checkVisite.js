const countCollections = require("../dbOperation/checkVisite");
// reading count from database

if (body.flag) {
  // visite count increment
  countCollections.updateOne({}, { $inc: { visite: 1 } });
} else {
  // revisite count increment
  countCollections.updateOne({}, { $inc: { revisite: 1 } });
}
