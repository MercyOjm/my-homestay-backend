import express from 'express';
import { getPropertyById, deleteProperty } from '../controllers/property.controller.js';

export const propRouter = express.Router();


propRouter.get('/:id', getPropertyById)         


propRouter.delete('/:id', deleteProperty)