const express = require("express");
const {
  createDemandNSupply,
  getAllDemandNSupplyList,
} = require("../controllers/demandAndSupplyController");

const router = express.Router();

router.route("/demandnsupply").get(getAllDemandNSupplyList);
router.route("/demandnsuplly/create").post(createDemandNSupply);

module.exports = router;
