const userService = require("../user/user.service");
const addressService = require("../address/address.service");
const imageService = require("../images/image.service");

function getProfile(req, res, next) {
  let profile;
  userService
    .get(req.params.userid)
    .then((user) => {
      profile = user;
      return addressService.get(profile.address_id);
    })
    .then((address) => {
      profile.address = address;
      return imageService.get(profile.image_id);
    })
    .then((image) => {
      profile.image = image;
      res.json(profile); // eslint-disable-line no-param-reassign
      return next();
    })
    .catch((e) => next(e));
}

function updateProfile(req, res, next, id) {
  User.get(id).then((user) => {
    user.dob = req.body.dob;
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.gender = req.body.gender;
    user.hobbies = req.body.hobbies;
    user.interest = req.body.interest;
    user.about = req.body.about;
    user
      .save()
      .then((savedUser) => res.json(savedUser))
      .catch((e) => next(e));
  });
}

// first_name: {
//   type: String
// },
// last_name: {
//   type: String
// },
// DOB: {
//   type: Date
// },
// gender: {
//   type: String
// },
// hobbies: {
//   type: String
// },
// interest: {
//   type: String
// },
// about: {
//   type: String
// },

module.exports = { getProfile, updateProfile };
