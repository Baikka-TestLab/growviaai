const express = require("express");

const router = express.Router();

const {
  getNavbarData,
} = require("../controllers/navbar.controller");

router.get("/", getNavbarData);

module.exports = router;