const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const profileController = require('../profile/profile.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/profiles/:userid')
  /** GET /api/users - Get list of users */
  .get(userCtrl.list)

  router.route('/profiles/:userid')
  .put()