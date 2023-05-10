const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
    Group_name:{
        type:String,
        required:true,
    },
    Sub_Category:{
        type:mongoose.Schema.ObjectId,
        ref:"Subcategory",
        required:true,
    },
    Category:{
        type:mongoose.Schema.ObjectId,
        ref:"Category",
        required:true,
    }
},{timestamps:true});

module.exports = mongoose.model("Group",GroupSchema);