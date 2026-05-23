const express = require("express");

const router = express.Router();

const { getHeroData } = require("../controllers/hero.controller");

router.get("/", getHeroData);

module.exports = router;
