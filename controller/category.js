//import the category model
const Category = require("../model/category");


//This grabs the "category_name" entered by the user,
// and pushes it to the eBay API that queries and  
const getCategory = async( res, req) =>{

    const {category_name}  = req.query;

    if(!category_name){
        res.statusCode(400).res.json({
            status : false,
            err_message: `Invalid category_name, Please Try Again.`

        })
    }

    //eBay API handles from here....


    //eBay API Return:
    // 1.category_id of "ebay_category_id" that category_name
    // 2. other details "item_details"




    res.json({ ebay_category_id,  item_details})

}


module.exports = { getCategory };