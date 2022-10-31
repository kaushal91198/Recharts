const express = require("express");
const {
  createInventory,
  getAllInventoryList,
} = require("../controllers/InventoryController");

const router = express.Router();

router.route("/inventory").get(getAllInventoryList);
router.route("/inventory/create").post(createInventory);

module.exports = router;
