const { home } = require("nodemon/lib/utils");
const path = require("path");

const mainController = {
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/home.html"))
    },
}
module.exports = mainController;