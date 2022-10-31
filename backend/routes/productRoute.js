const express = require("express");
const {
  createProduct,
  getAllProductCategories,
  getAllProducts,
  createProductCategory,
} = require("../controllers/productController");

const router = express.Router();

router.route("/product").get(getAllProducts);
router.route("/product/create").post(createProduct);
router.route("/productcategory").get(getAllProductCategories);
router.route("/productcategory/create").post(createProductCategory);

module.exports = router;
