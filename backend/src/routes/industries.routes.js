const express = require("express");

const router = express.Router();

const {
  getIndustriesData,
} = require("../controllers/industries.controller");

router.get("/", getIndustriesData);

module.exports = router;
