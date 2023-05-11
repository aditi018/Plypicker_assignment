const {getProducts,getProductDetail} = require("../controllers/productController");

const router = require("express").Router();
router.route("/products").get(getProducts);
router.route("/product/detail").get(getProductDetail);

module.exports = router;