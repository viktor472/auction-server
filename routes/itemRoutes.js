// NPM packeges 
const express = require("express")
const mongoose = require("mongoose");
const controllers = require("../controller/itemController");
const router = express.Router();

// Routers pointing to endpoint
router.get("/", controllers.getAllItems);
router.post("/", controllers.postItem);
router.get("/:itemId", controllers.getItem);
router.delete("/:itemId", controllers.deleteItem);
router.patch("/:itemId", controllers.uppdateItem);

// export
module.exports = router;