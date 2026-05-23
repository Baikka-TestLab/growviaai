const contactData = require("../data/contactData");

const getContactData = (req, res) => {
  res.status(200).json({
    success: true,
    data: contactData,
  });
};

module.exports = {
  getContactData,
};
