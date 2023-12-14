const mongoose = require('mongoose');

// Define the Booking schema
const boysBookingSchema = new mongoose.Schema({
  date:Date,
  startTime: String,
  endTime: String,
  numSeats: Number,
  selectedSeats: [Number],
});

// Create the Booking model
const BoysBooking = mongoose.model('BoysBooking', boysBookingSchema);

module.exports = BoysBooking;
