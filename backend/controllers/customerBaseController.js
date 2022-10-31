const CustomerBase = require("../models/CustomerBase/CustomerBase");

exports.createCustomerBase = async (req, res, next) => {
  try {
    const customerBasedetail = await CustomerBase.create(req.body);
    res.status(201).json({
      success: true,
      data: {
        customerBasedetail,
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

exports.getAllCustomerBaseList = async (req, res) => {
  try {
    const customerBasedetail = await CustomerBase.find();
    res.status(200).json({
      success: true,
      data: {
        customerBasedetail,
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
