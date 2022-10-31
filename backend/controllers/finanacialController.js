const Finanacials = require("../models/Finanacials/Financials");

exports.createFinancials = async (req, res, next) => {
  try {
    const Finanacialsdetail = await Finanacials.create(req.body);
    res.status(201).json({
      success: true,
      data: {
        Finanacialsdetail,
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

exports.getAllFinancialList = async (req, res) => {
  try {
    const Finanacialsdetail = await Finanacials.find();
    res.status(200).json({
      success: true,
      data: {
        Finanacialsdetail,
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
