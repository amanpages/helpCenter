const express = require('express');

const cors = require('cors');

const app = express();

const cardsRoute = require('./routes/card');

// Middleware
app.use(express.json());
app.use(cors());
require('dotenv').config();

// Connect to MongoDB
const mongoose = require('./config/db');

// Ping route to check if the server is running
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Use routes
app.use('/cards', cardsRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});