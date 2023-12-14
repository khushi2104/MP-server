const mongoose = require('mongoose');

// Define the Booking schema
const bookingSchema = new mongoose.Schema({
  date:Date,
  startTime: String,
  endTime: String,
  numSeats: Number,
  selectedSeats: [Number],
  notified: { type: Boolean, default: false },
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
