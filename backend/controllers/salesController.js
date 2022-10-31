const Sales = require("../models/Sales/Sales");

exports.createSales = async (req, res, next) => {
  try {
    const salesdetail = await Sales.create(req.body);
    res.status(201).json({
      success: true,
      data: {
        salesdetail,
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

exports.getAllSalesList = async (req, res) => {
  try {
    const salesdetail = await Sales.find();
    res.status(200).json({
      success: true,
      data: {
        salesdetail,
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
