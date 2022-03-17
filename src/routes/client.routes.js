const express = require("express");

const clientController = require("../controllers/clientController");

const router = express.Router();

router.get("/client", clientController.all);
router.post("/client", clientController.create);
router.put("/client/:id", clientController.update);
router.get("/client/:id", clientController.one);
router.delete("/client/:id", clientController.delete);

module.exports = router;