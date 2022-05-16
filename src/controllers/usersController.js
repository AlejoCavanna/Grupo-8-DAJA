const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    }
}
module.exports = mainController;