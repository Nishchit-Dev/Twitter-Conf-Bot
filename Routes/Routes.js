const { Posting } = require("../Controller/Confess");
const { CheckVisit } = require("../Controller/Visit");

const router = require("express").Router();

router.get("/confess", Posting);

router.get("/visit", CheckVisit);

module.exports = router;
