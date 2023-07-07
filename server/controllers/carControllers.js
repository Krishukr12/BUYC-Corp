const CarListing = require("../models/CarListing.model");
const createError = require("../utils/createError");

// Get all cars in the car list
const getAllCars = async (req, res, next) => {
  try {
    const cars = await CarListing.find({});
    res.status(200).json({
      success: true,
      cars: cars,
    });
  } catch (error) {
    next(createError(500, "Unable to retrieve car listings"));
  }
};

//Create Car details
const createCarList = async (req, res, next) => {
  const { title, image, specifications } = req.body;

  try {
    const newCarListing = new CarListing({
      title: title,
      image: image,
      specifications: specifications,
    });
    const createdCarListing = await newCarListing.save();
    res.status(201).json({
      success: true,
      message: "Car listing created successfully",
      car: createdCarListing,
    });
  } catch (error) {
    next(createError(500, "Unable to create car listing"));
  }
};

// Update car list
const updateCarList = async (req, res, next) => {
  const carId = req.params.id;
  const { title, image, specifications } = req.body;
  try {
    const updatedCarListing = await CarListing.findByIdAndUpdate(
      carId,
      { title: title, image: image, specifications: specifications },
      { new: true }
    );

    if (!updatedCarListing) {
      return next(createError(404, "Car listing not found"));
    }

    res.status(200).json({
      success: true,
      message: "Car listing updated successfully",
      car: updatedCarListing,
    });
  } catch (error) {
    next(createError(500, "Unable to update car listing"));
  }
};
// Delete Car list
const deleteCarList = async (req, res, next) => {
  const carId = req.params.id;
  try {
    const deletedCarListing = await CarListing.findByIdAndDelete(carId);

    if (!deletedCarListing) {
      return next(createError(404, "Car listing not found"));
    }
    res.status(200).json({
      success: true,
      message: "Car listing deleted successfully",
      car: deletedCarListing,
    });
  } catch (error) {
    next(createError(500, "Unable to delete car listing"));
  }
};

// Get particular car details
const getSpecificCarList = async (req, res, next) => {
  const carId = req.params.id;
  try {
    const car = await CarListing.findById(carId);

    if (!car) {
      return next(createError(404, "Car not found"));
    }
    res.status(200).json({
      success: true,
      car: car,
    });
  } catch (error) {
    next(createError(500, "Unable to retrieve car listing"));
  }
};
module.exports = {
  getAllCars,
  createCarList,
  deleteCarList,
  updateCarList,
  getSpecificCarList,
};
