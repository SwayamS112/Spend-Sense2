const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB with error handling
mongoose.connect('mongodb://127.0.0.1:27017/Spendsence')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Register user
app.post('/api/register', async (req, res) => {
    try {
        console.log('Received registration request:', req.body); // Add this for debugging

        const { name, email, password } = req.body;
        
        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Please provide all required fields'
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'Email already registered'
            });
        }

        // Create new user
        const user = new User({
            name,
            email,
            password
        });

        await user.save();

        // Send success response
        res.status(201).json({
            success: true,
            message: 'Registration successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Registration error:', error); // Add detailed error logging
        res.status(500).json({
            success: false,
            error: 'Registration failed: ' + error.message
        });
    }
});

// Add this login endpoint to your existing app.js
app.post('/api/login', async (req, res) => {
  try {
      const { email, password } = req.body;
      
      // Validate input
      if (!email || !password) {
          return res.status(400).json({
              success: false,
              error: 'Please provide email and password'
          });
      }

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(401).json({
              success: false,
              error: 'Invalid credentials'
          });
      }

      // Check password
      if (user.password !== password) {
          return res.status(401).json({
              success: false,
              error: 'Invalid credentials'
          });
      }

      // Send success response
      res.status(200).json({
          success: true,
          user: {
              id: user._id,
              name: user.name,
              email: user.email
          }
      });

  } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
          success: false,
          error: 'Login failed: ' + error.message
      });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});