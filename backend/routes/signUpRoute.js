import express from 'express';
const router = express.Router();
import Users from '../Schema/MyLogin.js';
import bcrypt from 'bcrypt';

// Get signups
router.get('/', async (req, res) => {
  try {
    const data = await Users.find();

    // Check if there is any data returned
    if (!data || data.length === 0) {
      console.log('No signups found.');
      return res.status(404).json({ message: 'No signups found.' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching signups:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Signup  route using bcrypt
router.post('/', async (req, res) => {
  // Signup  route using bcrypt
  const { username, email, password, userType } = req.body;
  // Check if any required field is missing

  if (username && email && password && userType) {
    return res.status(200).json({ message: 'Fields ok' });
  }

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  if (!userType) {
    return res.status(400).json({ message: 'User type is required' });
  }

  const existingUser = await Users.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    const errors = [];
    if (existingUser.username === username) {
      console.log('Username is already in use');
      return res.status(400).json({ message: 'Username is already in use' });
    }
    if (existingUser.email === email) {
      console.log('Email is already in use');
      return res.status(400).json({ message: 'Email is already in use' });
    }
    return res.status(400).json({ errors });
  }

  bcrypt.hash(password, 10).then((hash) => {
    Users.create({ username, email, password: hash, userType })
      .then((user) => {
        // Send a response indicating successful signup
        res.status(201).json({ message: 'Signup successful' });
      })
      .catch((err) => {
        res.status(500).json({ message: 'Internal server error' });
      });
  });
});

export default router;
