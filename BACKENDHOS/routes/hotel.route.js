const express = require('express');
const router = express.Router();

// Array of hotel objects
const rooms = [
  {
    id: 1,
    name: 'Deluxe room',
    description: 'A luxurious room in the heart of the city.',
    imageUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=PAKAINFO.com',
  },
  {
    id: 2,
    name: 'Bronze room',
    description: 'A cozy and affordable stay.',
    imageUrl: 'https://via.placeholder.com/150/000000/FFFFFF/',
  },
  {
    id: 3,
    name: 'Star room',
    description: 'A modern hotel with excellent amenities.',
    imageUrl: 'https://farm9.staticflickr.com/8505/8441256181_4e98d8bff5_z_d.jpg',
  },
];
const hotels = [
  {
    id: 1,
    name: 'Transcorp Hilton',
    description: 'A luxurious hotel in the heart of the city of Abuja.',
    imageUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=PAKAINFO.com',
  },
  {
    id: 2,
    name: 'Nest Hotel',
    description: 'A cozy and affordable stay in Ogbomsho.',
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
router.get('/rooms', (req, res) => {
  res.json(rooms); // Send hotel array as JSON to the frontend
});

module.exports = router;
