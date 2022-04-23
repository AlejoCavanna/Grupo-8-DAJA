const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController.js")

router.get("/carrito", mainController.carrito);

module.exports = router;