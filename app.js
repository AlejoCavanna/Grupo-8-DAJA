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
