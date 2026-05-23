const servicesData = require("../data/servicesData");

const getServicesData = (req, res) => {
  res.status(200).json({
    success: true,
    data: servicesData,
  });
};

module.exports = {
  getServicesData,
};
