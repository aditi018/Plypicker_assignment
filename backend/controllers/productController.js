const Product = require("../models/productModel");
const Group = require("../models/groupModel");
const Brand = require("../models/brandModel");
const Category = require("../models/categoryModel");
const Subcategory = require("../models/subCategoryModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

exports.getProducts = catchAsyncError(
    async(req,res) => {

        const resultPerPage = 30;
        const apifeatures = new ApiFeatures(Product.find().
        populate('group').populate('brand').populate('category').populate('subcategory')
        ,req.query).pagination(resultPerPage);

        const products = await apifeatures.query;

        res.status(200).json({
            success:true,
            products,
        })
    }
)

exports.getProductDetail = catchAsyncError(
    async(req,res,next) =>{
        const category_name = req.body.name;
        const category_id = await Category.find({name: category_name});
        
        const product_id = await Product.find({category: category_id[0]._id}).populate('category').populate('subcategory').populate('brand').populate('group');
        
        console.log(product_id.length);
        if(product_id.length == 0){
            return next(new ErrorHandler("Product not found",404));
        }
        res.status(200).json({
            success:true,
            product_id,
        })
    }
)