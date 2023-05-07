const express = require("express");
const categoryRouter  = express.Router();
const getCategory = require("../controller/category");

/**
 * @desc   
 * method   GET
 * route  "/category"
 * 
 */

categoryRouter.get("/", getCategory);

module.exports = categoryRouter;