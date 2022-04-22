const { home } = require("nodemon/lib/utils");
const path = require("path");

const productosController = {
    tienda: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/producCart.html"))
    },
}
module.exports = productosController;