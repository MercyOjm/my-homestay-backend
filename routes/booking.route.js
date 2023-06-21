import express from 'express';
import { createBooking, acceptBooking } from '../controllers/booking.controller.js';

const bookRouter = express.Router();

bookRouter.post('/', createBooking);
bookRouter.patch('/:bookingId/accept', acceptBooking);

export default bookRouter;
