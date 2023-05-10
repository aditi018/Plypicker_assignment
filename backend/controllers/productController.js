const Product = require("../models/productModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");

exports.getProducts = catchAsyncError(
    async(req,res) => {

        const resultPerPage = 12;
        const apifeatures = new ApiFeatures(Product.find(),req.query).pagination(resultPerPage);

        const products = await apifeatures.query;

        res.status(200).json({
            success:true,
            products,
        })
    }
)