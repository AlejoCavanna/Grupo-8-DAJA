const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get("/carrito", productsController.carrito);
router.get("/tienda", productsController.tienda);
// obtener todos los productos
router.get("/todos", productsController.allProducts);

/*** obtener un producto ***/ 
router.get('/detail/:id', productsController.details); 


module.exports = router;