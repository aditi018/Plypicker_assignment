const Product = require("../models/productModel");
const Group = require("../models/groupModel");
const Brand = require("../models/brandModel");
const Category = require("../models/categoryModel");
const Subcategory = require("../models/subCategoryModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");

exports.getProducts = catchAsyncError(
    async(req,res) => {

        const resultPerPage = 12;
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