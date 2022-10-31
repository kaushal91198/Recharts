const mongoose = require("mongoose");

const Financials = mongoose.Schema({
  month: {
    type: String,
    required: [true, "please add valid month"],
  },
  revenue: {
    type: Number,
    require: [true, "Please add valid revenue"],
  },
  profit: {
    type: Number,
    require: [true, "Please add valid revenue"],
  },
});

module.exports = mongoose.model("Financial", Financials);
