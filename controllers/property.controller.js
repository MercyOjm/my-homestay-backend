import Property from '../models/property.model.js';
import Booking from '../models/booking.model.js';
import createError from 'http-errors';

async function createProperty(req, res, next) {
  try {
    const propertyData = req.body;

    // Create a new property object using the Property model
    const property = new Property(propertyData);

    // Save the property to the database
    await property.save();

    res.status(201).json({ message: 'Property created successfully' });
  } catch (error) {
    next(error);
  }
}

/* -------------------------- PUT  /properties/:pid ------------------------- */

async function updateProperty(req, res, next) {
  try {
    const { pid } = req.params;
    const propertyData = req.body;

    // Find the property by id and update it with the received data (propertyData)
    const property = await Property.findById(pid)
    if (!property) {
      return createError(404, 'Property does not exist.');
    }

    const updateResult = await Property.findByIdAndUpdate(pid, propertyData, { new: true });


    res.status(200).json({
      message: 'Property updated successfully!',

      property: updateResult
    });
  } catch (error) {
    next(error);
  }
}

/* -------------------------- GET /properties/:pid -------------------------- */

async function getPropertyByBookingHistory(req, res, next) {
  try {
    const { pid } = req.params;

    // Filter the booking by property by id
    const propertyBookings = Booking.filter(booking => booking.propertyId === pid);

    if (!propertyBookings) {
      return createError(404, 'Property bookings not found.');
    }

    // map booking to summary format
    const propertyBookingsSummary = propertyBookings.map(booking => ({
      guestName: booking.guest_name,
      dates: `${booking.start_date} to ${booking.end_date}`,
      price: booking.room_rate.amount,
      status: booking.status,
    }));


    res.status(200).json({
      propertyBookingsSummary,
      message: 'Property bookings retrieved successfully!'
    });
  } catch (error) {
    next(error);
  }
}



export default { createProperty, updateProperty, getPropertyByBookingHistory };