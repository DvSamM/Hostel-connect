const express = require('express');
const router = express.Router();

// Array of hotel objects
const hotels = [
  {
    id: 1,
    name: 'Hotel Imperial',
    description: 'A luxurious hotel in the heart of the city.',
    imageUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=PAKAINFO.com',
  },
  {
    id: 2,
    name: 'Hotel Nest',
    description: 'A cozy and affordable stay.',
    imageUrl: 'https://via.placeholder.com/150/000000/FFFFFF/',
  },
  {
    id: 3,
    name: 'Hotel Star',
    description: 'A modern hotel with excellent amenities.',
    imageUrl: 'https://farm9.staticflickr.com/8505/8441256181_4e98d8bff5_z_d.jpg',
  },
];

// Route to get all hotels (Frontend will fetch from here)
router.get('/hotels', (req, res) => {
  res.json(hotels); // Send hotel array as JSON to the frontend
});

module.exports = router;
