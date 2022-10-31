const express = require("express");
const {
  createSales,
  getAllSalesList,
} = require("../controllers/salesController");

const router = express.Router();

router.route("/sales").get(getAllSalesList);
router.route("/sales/create").post(createSales);

module.exports = router;
