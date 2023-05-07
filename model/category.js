const mongoose = require("mongoose");

categorySchema = new mongoose.Schema({
    category_name: {
        type : String,
        required : [true, "Please Selected a Category"]

    }
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;