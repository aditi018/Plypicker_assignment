const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the category of product"],
    },
    category_image:{
        url:{
            type:String,
            required:true,
        }
    }
})

module.exports = mongoose.model("Category",CategorySchema);