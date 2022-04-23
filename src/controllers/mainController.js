const { home } = require("nodemon/lib/utils");
const path = require("path");

const mainController = {
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/home.html"))
    },
    tienda: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/producCart.html"))
    },
    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/login.html"))
    },
    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/register.html"))
    },
    carrito: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/productCart.html"))
    }
}
module.exports = mainController;