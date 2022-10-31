const mongoose = require("mongoose");

const CustomerBaseModel = mongoose.Schema({
  age: {
    type: Number,
    required: [true, "Please Add Valid Number"],
  },
  spending: {
    type: Number,
    required: [true, "Please Add Valid Number"],
  },
});

module.exports = mongoose.model("CustomerBase", CustomerBaseModel);
