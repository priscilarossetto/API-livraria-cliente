const express = require("express");

const clientController = require("./controllers/Client-controller")

const router = express.Router()

router.get("/client", clientController.all)

module.exports = router