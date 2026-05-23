const express = require("express");

const router = express.Router();

const { getFooterData } = require("../controllers/footer.controller");

router.get("/", getFooterData);

module.exports = router;
