const express = require("express");
const router = express.Router();

const productosConstroller = require("../controllers/productosController.js");

router.get("/tienda", productosConstroller.tienda)

module.exports = router;