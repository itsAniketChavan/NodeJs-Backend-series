const express = require('express');
require('dotenv').config();
const app = express();
const { connectToDB } = require('./db');
const User = require('./userModel');

app.use(express.json());

connectToDB();

app.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    // Create new user
    const newUser = new User({ username, password, email });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.json('Hi, server is working..');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
