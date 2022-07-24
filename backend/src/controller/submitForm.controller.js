const User = require("../model/user");

const SubmitRouteController = async (req, res) => {
  console.log(req.body);
  const { name, email, phone, address, city, state, zip, carbrand } = req.body;

  if (!name || !email || !phone) {
    return res.status(422).json({
      status: "Failure",
      message: "Please provide all the mandatory fields.",
    });
  }

  const data = new User({
    name: name,
    email,
    email,
    phone: phone,
    address: address,
    city: city,
    state: state,
    zip: zip,
    carbrand: carbrand,
  });
  data
    .save()
    .then(() => {
      return res.status(200).json({
        status: "Success",
        data: data,
      });
    })
    .catch(() => {
      return res.status(422).json({
        status: "Failure",
        message: "Cant save data",
      });
    });
};

module.exports = SubmitRouteController;
