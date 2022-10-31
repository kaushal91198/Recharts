const Inventory = require("../models/Inventory/Inventory");

exports.createInventory = async (req, res, next) => {
  try {
    const InventoryDetails = await Inventory.create(req.body);
    res.status(201).json({
      success: true,
      data: {
        InventoryDetails,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      success: false,
      data: {
        message: "something went wrong",
      },
    });
  }
};

exports.getAllInventoryList = async (req, res) => {
  try {
    const InventoryDetails = await Inventory.find();
    res.status(200).json({
      success: true,
      data: {
        InventoryDetails,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      success: false,
      data: {
        message: "something went wrong",
      },
    });
  }
};
