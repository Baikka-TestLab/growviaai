const testController = (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Working Successfully",
  });
};

module.exports = {
  testController,
};