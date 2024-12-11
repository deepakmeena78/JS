const express = require("express");
const { GeneratedShortURL } = require("../controllers/url");

const router = express.Router();
router.post("/", GeneratedShortURL);

module.exports = router;