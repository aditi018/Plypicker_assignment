const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
    Category:[
        type=mongoose.Schema.ObjectId,
        ref="Category",
        required=true
    ],
    SubCategory:[
        type=mongoose.Schema.ObjectId,
        ref="Subcategory",
        required=true,
    ],
    group:[
        type=mongoose.Schema.ObjectId,
        ref="Group",
        required=true,
    ],
    Brand_name:{
        type:String,
        required:true,
    },
    Brand_image:{
       type:String,
       required:true,
    }
},{timestamps:true});

module.exports = mongoose.model("Brand",BrandSchema);