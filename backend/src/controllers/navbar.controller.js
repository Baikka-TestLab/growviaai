const navbarData = require("../data/navbarData");

const getNavbarData = (req, res) => {
  res.status(200).json({
    success: true,
    data: navbarData,
  });
};

module.exports = {
  getNavbarData,
};