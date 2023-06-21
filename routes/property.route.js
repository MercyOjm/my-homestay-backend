/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import { createProperty, deleteProperty, getAllProperty, getPropertyDetail, getPropertyPreview, searchProperties } from '../controllers/property.controller.js';

const propertyRoutes = express.Router(); // eslint-disable-line new-cap
propertyRoutes.post('/', createProperty)
      .get('/search', searchProperties)     
      .get('/', getAllProperty)    
      .get('/:id', getPropertyDetail)
      .delete('/:id', deleteProperty)
      .get('/:propertyId/preview', getPropertyPreview)
      .get('/:id/booking-history', propertyController.getPropertyByBookingHistory)
      .put('/:id',propertyController.updateProperty);


      

export default propertyRoutes;
