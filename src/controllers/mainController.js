const { home } = require("nodemon/lib/utils");
const path = require("path");

const listaCervezas = [
    {
        id:1,
        titulo: 'Cerveza 3 horses lage',
        descripcionCorta: 'La 3 Horses Dark Malt es una malta sin alcohol elaborada con las aguas más puras y la mejor cebada.',
        descripcionDetallada: '',
        precio: '659.50',
        img: 'cerveza-3-horses-lager.jpg'
    },
    {
        id:2,
        titulo: 'Miller',
        descripcionCorta: 'Cerveza de estilo lager, de baja fermentación,tiene patentado un sistema de filtración en frío sin necesidad de pasteurización, que le permite conservar todo el sabor en la propia botella.',
        descripcionDetallada: '',
        precio: '476.00',
        img: 'cerveza-miller-rubia.jpg'
    },
    {
        id:3,
        titulo: 'Cerveza Patagonia',
        descripcionCorta: 'Patagonia es una cerveza tipo Belgian Witbier con trigo de cremosidad característica.',
        descripcionDetallada: '',
        precio: '237.50',
        img: 'cerveza-patagonia.jpg'
    },
    {
        id:4,
        titulo: 'Corona',
        descripcionCorta: 'La Corona es de estilo Pilsner',
        descripcionDetallada: '',
        precio: '367.50',
        img: 'corona.png'
    },
    {
        id:5,
        titulo: 'IPA',
        descripcionCorta: 'Las IPAs se caracterizan por su amargor inicial, debido a la cantidad de lúpulo añadido en su elaboración.',
        descripcionDetallada: '',
        precio: '537.50',
        img: 'IPA.png'
    },
    {
        id:6,
        titulo: 'Kostritzer Black Beer',
        descripcionCorta: 'Köstritzer Schwarzbier es una cerveza negra de baja fermentación',
        descripcionDetallada: '',
        precio: '3337.50',
        img: 'kostritzer-black-beer.png'
    },
    {
        id:7,
        titulo: 'Poker 21',
        descripcionCorta: 'Es una cerveza negra de baja fermentación',
        descripcionDetallada: '',
        precio: '3778.50',
        img: 'poker-21.png'
    },
    {
        id:8,
        titulo: 'Tipos Cervezas',
        descripcionCorta: 'Cervezas artesanales',
        descripcionDetallada: '',
        precio: '3700.50',
        img: 'tipos-cerveza.png'
    }
]

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
    details:(req,res)=>{
        let cerveza = listaCervezas.find(cerveza => cerveza.id == req.params.menuId)
        res.render("details", { cerveza: cerveza });
    }
}
module.exports = mainController;