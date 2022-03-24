const express = require("express");
const clientController = require("../controllers/clientController");
const router = express.Router();

router.get("/client", clientController.all);
router.post("/client", clientController.create);
router.get("/client/:id", clientController.one);
router.put("/client/:id", clientController.update);
router.delete("/client/:id", clientController.delete);

module.exports = router;