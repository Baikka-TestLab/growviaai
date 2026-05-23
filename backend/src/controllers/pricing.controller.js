const pricingData = require("../data/pricingData");

const getPricingData = (req, res) => {
  res.status(200).json({
    success: true,
    data: pricingData,
  });
};

module.exports = {
  getPricingData,
};
