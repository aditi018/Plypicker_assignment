const {getProducts} = require("../controllers/productController");

const router = require("express").Router();
router.route("/products").get(getProducts);

module.exports = router;