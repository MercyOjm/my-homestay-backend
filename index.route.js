
const express = require('express');
const userRoutes = require('./server/user/user.route');
const profileRoutes = require('./server/profile/profile.router');
const propertyRoutes = require('./server/property/property.route'); // Import property routes

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// Mount routes
router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);
router.use('/properties', propertyRoutes); // Mount property routes at /properties

module.exports = router;
