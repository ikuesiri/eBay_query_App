const express = require("express");
 
const itemsRouter  = express.Router();

itemsRouter.create("/")
itemsRouter.patch("/:itemId")
itemsRouter.delete("/:itemId")


module.exports = itemsRouter;