const express = require('express');
const app = express();
const { use } = require("express/lib/application");


const mainRouter = require("./routes/mainRouter.js");
const userRouter = require("./routes/usersRouter.js");
const productosRouter = require("./routes/productosRouter.js")
const carritoRouter = require("./routes/carritoRouter.js")

app.use(express.static("public"));

app.get("/", mainRouter);
app.get("/register", userRouter);
app.get("/login", userRouter);
app.get("/tienda", productosRouter);
app.get("/carrito", carritoRouter);


app.listen(3005,()=>console.log("Servidor corriendo en http://localhost:3005"));

