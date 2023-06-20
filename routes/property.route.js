import express from 'express';

import propertyController from '../controllers/property.controller.js';

const router = express.Router(); // eslint-disable-line new-cap
router.post('/prop', propertyController.createProperty)
      .get('/:id', propertyController.getPropertyDetail)
      .delete('/:id', propertyController.deleteProperty);

export default router