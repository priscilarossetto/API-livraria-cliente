const express = require("express");

const clientController = require("../controllers/clientController");

const router = express.Router();

router.get("/client", clientController.all);

module.exports = router;