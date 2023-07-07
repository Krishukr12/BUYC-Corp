// Dotenv configuration
require("dotenv").config();

// All imports
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on("disconnected", () => {
  console.log("Connection unestablished");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDb connected successfully");
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error.message);
});

module.exports = connection;
