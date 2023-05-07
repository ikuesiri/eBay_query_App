const mongoose = require("mongoose");

itemSchema = new mongoose.Schema({
    ebay_category_id: {
        type : Number,
        required : [true, "Please Enter a valid ebay category id"]

    },
    item_details: {
        title: String,
        description: String,
        price: Number,
    }
})

const Item = mongoose.model("Item", categorySchema);

module.exports = Item;