const express = require('express');
const app = express();
const path = require("path");


const mainRouter = require("./routes/mainRouter.js");
const userRouter = require("./routes/usersRouter.js");
const productosRouter = require("./routes/productosRouter.js")
const carritoRouter = require("./routes/carritoRouter.js")
const allProducts = require("./routes/allProductsRouter.js")

const detailsProducts = require("./routes/detailsProducts.js");

app.use(express.static("public"));
app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');

app.get("/", mainRouter);
app.get("/allProducts", allProducts);
app.get("/register", userRouter);
app.get("/login", userRouter);
app.get("/tienda", productosRouter);
app.get("/carrito", carritoRouter);


app.listen(3005, () => console.log("Servidor corriendo en http://localhost:3005"));

