const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: true
  },

  loginCount: {
    type: Number,
    default: 0
  },
  
  lastLogin: {
  type: Date
},

  loginHistory: [
    {
      type: Date,
      default: Date.now
    }
  ],

  totalTimeSpent: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);
