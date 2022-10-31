const express = require("express");
const {
  createCustomerBase,
  getAllCustomerBaseList,
} = require("../controllers/customerBaseController");

const router = express.Router();

router.route("/customerbase").get(getAllCustomerBaseList);
router.route("/customerbase/create").post(createCustomerBase);

module.exports = router;
