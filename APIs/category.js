const express = require("express");
 
const categoryRouter  = express.Router();

categoryRouter.get("/category", async(req, res) =>{

    const { CATEGORY_NAME } = req.body;

})