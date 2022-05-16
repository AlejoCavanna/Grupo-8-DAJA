const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE

// ************ Middlewares - (don't touch) ************
app.use(express.static("public")); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs'); // Define que el motor que utilizamos es EJS
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas


// ************ Routes ************
const userRouter = require("./routes/usersRouter.js");
app.use("/user", userRouter);

const productsRouter = require("./routes/productsRouter.js");
app.use("/products", productsRouter);

const mainRouter = require("./routes/mainRouter.js");
app.use("/", mainRouter);

app.listen(3005, () => console.log("Servidor corriendo en http://localhost:3005"));

