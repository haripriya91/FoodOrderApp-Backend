const mongoose = require('mongoose');


// Define a schema for the Restaurant model
const restaurantSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    cuisine: {
      type: [String], // Array of strings
      default: [],
      required: true,
    },
    location: {
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      zipcode: {
        type: String,
        required: true,
      },
    },
    contact: {
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    openingHours: {
      type: String,
      required: true,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    // Additional fields based on your requirements
  });
  
  // Create the Restaurant model
  const Restaurants = mongoose.model('Restaurants', restaurantSchema);
  
  module.exports = Restaurants;
  