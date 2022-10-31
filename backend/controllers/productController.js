const { ProductModel, CategoryModel } = require("../models/Product/Product");

exports.createProduct = async (req, res, next) => {
  try {
    const productdetail = await ProductModel.create(req.body);
    res.status(201).json({
      success: true,
      data: {
        productdetail,
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

exports.createProductCategory = async (req, res, next) => {
  try {
    const productCategorydetail = await CategoryModel.create(req.body);
    res.status(201).json({
      success: true,
      data: {
        productCategorydetail,
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

exports.getAllProducts = async (req, res) => {
  try {
    const productdetail = await ProductModel.find();
    res.status(200).json({
      success: true,
      data: {
        productdetail,
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

exports.getAllProductCategories = async (req, res) => {
  try {
    const productCategorydetails = await CategoryModel.find();
    res.status(200).json({
      success: true,
      data: {
        productCategorydetails,
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
