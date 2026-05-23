const express = require("express");

const router = express.Router();

const { getPricingData } = require("../controllers/pricing.controller");

router.get("/", getPricingData);

module.exports = router;
