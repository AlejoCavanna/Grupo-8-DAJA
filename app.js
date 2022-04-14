let express = require('express');
const { use } = require("express/lib/application");
let app = express();

const path = require('path');

app.use(express.static("public"));


app.listen(3005,()=>console.log("Servidor corriendo en http://localhost:3005"));

app.get("/",(req,res)=>{
    let htmlPath = path.resolve(__dirname,"./views/home.html");
    res.sendFile(htmlPath);
});

app.get("/producto",(req,res)=>{
    let htmlPath = path.resolve(__dirname,"./views/productDetail.html");
    res.sendFile(htmlPath);
});
app.get("/carrito",(req,res)=>{
    let htmlPath = path.resolve(__dirname,"./views/productCart.html");
    res.sendFile(htmlPath);
});
app.get("/registro",(req,res)=>{
    let htmlPath = path.resolve(__dirname,"./views/register.html");
    res.sendFile(htmlPath);
});
app.get("/login",(req,res)=>{
    let htmlPath = path.resolve(__dirname,"./views/login.html");
    res.sendFile(htmlPath);
});