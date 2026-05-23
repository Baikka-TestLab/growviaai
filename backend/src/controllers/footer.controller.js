const footerData = require("../data/footerData");

const getFooterData = (req, res) => {
  res.status(200).json({
    success: true,
    data: footerData,
  });
};

module.exports = {
  getFooterData,
};
