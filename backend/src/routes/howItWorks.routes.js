const express = require("express");

const router = express.Router();

const {
  getHowItWorksData,
} = require("../controllers/howItWorks.controller");

router.get("/", getHowItWorksData);

module.exports = router;
