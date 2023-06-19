import express from 'express';
import { getPropertyById, getAllProperties, deleteProperty, updateProperty } from '../controllers/property.controller.js';

export const propRouter = express.Router();


propRouter.get('/:id', getPropertyById)
          .get('/', getAllProperties)

propRouter.put('/:id', updateProperty)
propRouter.delete('/:id', deleteProperty)