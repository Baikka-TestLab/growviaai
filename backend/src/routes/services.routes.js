const express = require("express");

const router = express.Router();

const { getServicesData } = require("../controllers/services.controller");

router.get("/", getServicesData);

module.exports = router;
