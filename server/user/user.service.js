const User = require("./user.model");

/**
 * Get user
 * @returns {User}
 */
async function get(id) {
  return await User.get(id);
}

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
async function create(user) {
  const user = new User({
    email: user.email,
    password: user.password,
  });

  return await user.save();
}

/**
 * Update existing user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
async function update(user) {
  return await User.get(id)
    .then((user) => {
      user.dob = req.body.dob;
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;
      user.gender = req.body.gender;
      user.hobbies = req.body.hobbies;
      user.interest = req.body.interest;
      user.about = req.body.about;
      return user;
    })
    .save();
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
async function list(query) {
  const { limit = 50, skip = 0 } = query;
  return await User.list({ limit, skip });
}

/**
 * Delete user.
 * @returns {User}
 */
async function remove(id) {
  return await User.get(id).remove();
}

module.exports = { get, create, update, list, remove };
