const mongoose = require("mongoose");

// CarListing Schema
const carListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  specifications: {
    type: [String],
    required: true,
  },
});

const CarListing = mongoose.model("CarListing", carListingSchema);

module.exports = CarListing;
