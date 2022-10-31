const mongoose = require("mongoose");

const productCategory = mongoose.Schema({
  categoryname: {
    type: String,
    required: [true, "Please Enter Category Name"],
  },
  marketShare: {
    type: Number,
    required: [true, "Please Enter Value"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const product = mongoose.Schema({
  productname: {
    type: String,
    required: [true, "Please Enter Category Name"],
  },
  marketShare: {
    type: Number,
    required: [true, "Please Enter Value"],
    maxLength: [3, "add valid number for marketShare"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  CategoryModel: mongoose.model("Category", productCategory),
  ProductModel: mongoose.model("Product", product),
};
