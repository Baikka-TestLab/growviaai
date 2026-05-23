const heroData = require("../data/heroData");

const getHeroData = (req, res) => {
  res.status(200).json({
    success: true,
    data: heroData,
  });
};

module.exports = {
  getHeroData,
};
