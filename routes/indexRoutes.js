const express = require('express')
const router = express.Router();

const indexController = require("../controllers/indexController")

router.get("/", indexController.getIndexPage);

router.post("/", indexController.postIndexPage);

module.exports = router;