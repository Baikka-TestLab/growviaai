const howItWorksData = require("../data/howItWorksData");

const getHowItWorksData = (req, res) => {
  res.status(200).json({
    success: true,
    data: howItWorksData,
  });
};

module.exports = {
  getHowItWorksData,
};
