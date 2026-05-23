const industriesData = require("../data/industriesData");

const getIndustriesData = (req, res) => {
  res.status(200).json({
    success: true,
    data: industriesData,
  });
};

module.exports = {
  getIndustriesData,
};
