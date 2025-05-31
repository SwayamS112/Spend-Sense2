const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  savedEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event' 
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model("Registration", registrationSchema);
