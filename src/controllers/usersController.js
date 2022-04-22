const { home } = require("nodemon/lib/utils");
const path = require("path");

const usersController = {

    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/login.html"))
    },

    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/register.html"))
    }
}
module.exports = usersController;