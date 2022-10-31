const mongoose = require("mongoose");

const DemandNSupplyModel = mongoose.Schema({
  month: {
    type: String,
    required: [true, "Enter valid Month"],
  },
  demand: {
    type: Number,
    required: [true, "Enter Valid Number"],
  },
  supply: {
    type: Number,
    required: [true, "Enter Valid Number"],
  },
});

module.exports = mongoose.model("DemandNSupply", DemandNSupplyModel);
