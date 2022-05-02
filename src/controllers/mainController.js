const { home } = require("nodemon/lib/utils");
const path = require("path");

const mainController = {
    index: (req, res) => {
        res.render("home");
    },
    tienda: (req, res) => {
        res.render("productCart");
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    carrito: (req, res) => {
        res.render("productCart");
    },
    allProducts:(req, res) => {
        res.render("allProducts");
    },
}
module.exports = mainController;