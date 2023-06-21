/* eslint-disable import/no-named-as-default-member */
import express from 'express';
// eslint-disable-next-line import/no-named-as-default
import propertyController from '../controllers/property.controller.js';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    .post(propertyController.createProperty);

router.route('/:pid')
    .get(propertyController.getPropertyByBookingHistory)
    .put(propertyController.updateProperty);

export default router;
