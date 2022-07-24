const Data = require("../model/data");

const UserRouteController = async (req, res) => {
  const data = await Data.find({});
  return res.status(200).json({
    status: "Success",
    data: data,
  });
};

module.exports = UserRouteController;
