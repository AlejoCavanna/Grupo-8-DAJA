const express = require('express');
const app = express();
const { use } = require("express/lib/application");


const mainRouter = require("./routes/mainRouter.js");
const userRouter = require("./routes/usersRouter.js");
const productosRouter = require("./routes/productosRouter.js")

app.use(express.static("public"));

app.use("/", mainRouter);
app.use("/register", userRouter);
app.use("/login", userRouter);
app.use("/tienda", productosRouter);


app.listen(3005,()=>console.log("Servidor corriendo en http://localhost:3005"));

