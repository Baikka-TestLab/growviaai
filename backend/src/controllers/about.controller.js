const aboutData = require("../data/aboutData");

const getAboutData = (req, res) => {
  res.status(200).json({
    success: true,
    data: aboutData,
  });
};

module.exports = {
  getAboutData,
};
