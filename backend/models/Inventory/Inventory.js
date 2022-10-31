const mongoose = require("mongoose");

const Inventory = mongoose.Schema({
  month: {
    type: String,
    required: [true, "Please Add Valid Name"],
  },
  stock: {
    type: Number,
    required: [true, "Please add Valid Number"],
  },
});

module.exports = mongoose.model("Inventory", Inventory);
