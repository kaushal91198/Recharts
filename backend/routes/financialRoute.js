const express = require("express");
const {
  createFinancials,
  getAllFinancialList,
} = require("../controllers/finanacialController");

const router = express.Router();

router.route("/financial").get(getAllFinancialList);
router.route("/financial/create").post(createFinancials);

module.exports = router;
