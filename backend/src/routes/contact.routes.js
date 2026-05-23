const express = require("express");

const router = express.Router();

const { getContactData } = require("../controllers/contact.controller");

router.get("/", getContactData);

module.exports = router;
