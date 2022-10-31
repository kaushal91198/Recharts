const demandAndSupply = require("../models/DemandAndSupply/DemandAndSupply");

exports.createDemandNSupply = async (req, res, next) => {
  try {
    const demandAndSupplydetail = await demandAndSupply.create(req.body);
    res.status(201).json({
      success: true,
      data: {
        demandAndSupplydetail,
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

exports.getAllDemandNSupplyList = async (req, res) => {
  try {
    const demandAndSupplydetail = await demandAndSupply.find();
    res.status(200).json({
      success: true,
      data: {
        demandAndSupplydetail,
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
