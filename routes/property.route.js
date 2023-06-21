import express from 'express';

import { createProperty, deleteProperty, getPropertyDetail } from '../controllers/property.controller.js';

const propertyRoutes = express.Router(); // eslint-disable-line new-cap
propertyRoutes.post('/', createProperty)
      .get('/:id', getPropertyDetail)
      .delete('/:id', deleteProperty);

export default propertyRoutes;
