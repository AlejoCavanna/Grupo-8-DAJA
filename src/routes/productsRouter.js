const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController.js");

router.get("/carrito", mainController.carrito);
router.get("/tienda", mainController.tienda);
// obtener todos los productos
router.get("/prueba", mainController.allProducts);

/*** obtener un producto ***/ 
router.get('/detail/:id', mainController.details); 


module.exports = router;