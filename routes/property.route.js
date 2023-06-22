/* eslint-disable import/no-named-as-default-member */
import express from 'express';
// eslint-disable-next-line import/no-named-as-default
import propertyController from '../controllers/property.controller.js';
import { propertyValidation } from '../validations/property.js';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    .post(protect(), validate(propertyValidation), propertyController.createProperty);

router.route('/:pid')
    .get(protect(), validate(propertyValidation), propertyController.getPropertyByBookingHistory)
    .put(protect(), validate(propertyValidation), propertyController.updateProperty);

export default router;
