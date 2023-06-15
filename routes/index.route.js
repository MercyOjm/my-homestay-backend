<<<<<<< HEAD:index.route.js

const express = require('express');
const userRoutes = require('./server/user/user.route');
const profileRoutes = require('./server/profile/profile.router');
const propertyRoutes = require('./server/property/property.route'); // Import property routes
=======
import express from 'express';
import userRoutes from './user.route.js';
import profileRoutes from './profile.router.js';
>>>>>>> origin/hype-backend:routes/index.route.js

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

<<<<<<< HEAD:index.route.js
// Mount routes
router.use('/users', userRoutes);
=======
// mount user routes at /users
router.use('/', userRoutes);
>>>>>>> origin/hype-backend:routes/index.route.js
router.use('/profiles', profileRoutes);
router.use('/properties', propertyRoutes); // Mount property routes at /properties

export default  router;
