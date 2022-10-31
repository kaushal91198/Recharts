const mongoose = require("mongoose");

const Sales = mongoose.Schema({
  audience: {
    type: String,
    required: [true, "Please Enter Valid Name"],
  },
  unit: {
    type: Number,
    required: [true, "Please Enter Valid Number"],
  },
  total: {
    type: Number,
    required: [true, "Enter Valid Number"],
  },
});

module.exports = mongoose.model("Sales", Sales);
