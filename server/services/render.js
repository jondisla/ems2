/** @format */
//use axios to make requests
const axios = require("axios");

exports.homeRoutes = (req, res) => {
  //make get request to api/users
  axios
    .get("https://user-manage-sys.herokuapp.com/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.new = (req, res) => {
  res.render("new");
};
