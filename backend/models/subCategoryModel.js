const mongoose = require("mongoose");

const SubCatSchema = new mongoose.Schema({
    Sub_Category_name:{
        type:String,
        required:true,
    },
    Category:{
        type:mongoose.Schema.ObjectId,
        ref:"Category",
        required:true,
    }
},{timestamps:true});

module.exports = mongoose.model("Subcategory",SubCatSchema);