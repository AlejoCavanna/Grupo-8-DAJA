const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/allProducts", mainController.allProducts);

module.exports = router;