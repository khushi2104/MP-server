const mongoose = require('mongoose');

const fuserSchema = new mongoose.Schema({
  username: String,
  password: String, // Make sure to hash and salt the password
  // Add other user-related fields as needed
});

const FUser = mongoose.model('FUser', fuserSchema);

module.exports = FUser;
