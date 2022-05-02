const express = require('express');
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get('/detalle/:id/', mainController.details);

module.exports = router;