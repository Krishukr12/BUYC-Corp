// All imports
const { Router } = require("express");
const {
  getAllCars,
  createCarList,
  updateCarList,
  getSpecificCarList,
  deleteCarList,
} = require("../controllers/carControllers");

const carRouter = Router();

// GET endpoint to retrieve all car listings
carRouter.get("/carListing", getAllCars);

// GET endpoint to retrieve a specific car listing by ID
carRouter.get("/carListings/:id", getSpecificCarList);

// POST endpoint to create a new car listing
carRouter.post("/carListings", createCarList);

// PUT endpoint to update a specific car listing by ID
carRouter.put("/carListings/:id", updateCarList);

// DELETE endpoint to delete a specific car listing by ID
carRouter.delete("/carListings/:id", deleteCarList);

module.exports = carRouter;
