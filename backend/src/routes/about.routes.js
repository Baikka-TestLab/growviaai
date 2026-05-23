const express = require("express");

const router = express.Router();

const { getAboutData } = require("../controllers/about.controller");

router.get("/", getAboutData);

module.exports = router;
