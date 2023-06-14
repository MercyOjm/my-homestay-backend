const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const {signin, signup} = require('./user.controller');
const { protect } = require('../util/auth');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/signup')
  .post(signup)


router.route('/signin')
  .post(signin)



module.exports = router;
