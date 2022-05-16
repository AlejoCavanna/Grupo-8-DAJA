const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const mainController = {
    tienda: (req, res) => {
        res.render("productCart");
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