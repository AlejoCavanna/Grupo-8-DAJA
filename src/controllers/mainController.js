const path = require("path");
const fs = require('fs');
const res = require("express/lib/response");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



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
        res.render("allProducts", {products});
    },
    details: (req, res) => {
        let id = req.params.id
        let product = products.find(product => product.id == id)
        res.render('detail', {
            product
        })
    }

}
module.exports = mainController;