const express = require('express');
const router = express.Router();

// Array of hotel objects
const hotels = [
  {
    name: 'Hotel Imperial',
    description: 'A luxurious hotel in the heart of the city.',
    imageUrl: 'https://example.com/imperial.jpg',
  },
  {
    name: 'Hotel Nest',
    description: 'A cozy and affordable stay.',
    imageUrl: 'https://example.com/nest.jpg',
  },
  {
    name: 'Hotel Star',
    description: 'A modern hotel with excellent amenities.',
    imageUrl: 'https://example.com/star.jpg',
  },
  {
    name: 'Hotel Hilton',
    description: 'A renowned hotel chain with premium services.',
    imageUrl: 'https://example.com/hilton.jpg',
  },
];

// Route to get all hotels (Frontend will fetch from here)
router.get('/hotels', (req, res) => {
  res.json(hotels); // Send hotel array as JSON to the frontend
});

module.exports = router;
