// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String, // Make sure to hash and salt the password
//   // Add other user-related fields as needed
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
  },

  // Add other user-related fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
