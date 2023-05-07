const Item = require("../model/item");



// creates a new item

const uploadItem = async( req, res) => {


    const ebay_category_id =  parseInt(req.body);
    const item_details = req.body;


    //Validating ebay_category_id
    if(!ebay_category_id){
        return res.status(400).json({ error_message: 'ebay_category_id is required' });
    }
    if (isNaN(ebay_category_id)){
        return res.status(400).json({ error_message: 'ebay_category_id must be a number' });

    }

    //Validating item_details
    if(!item_details){
        return res.status(400).json({ error_message: 'item_details is required' });
    }
    //item_details is an Object of key-value pair and because it is required. It needs to be checked and returned as error if it is empty
    if (Object.keys(item_details) < 1 ){
        return res.status(400).json({ error_message: 'Item field is required' });

    }

}