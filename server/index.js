// Dotenv configuration
require("dotenv").config();

// All imports
const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");

const app = express();

// Compulsory Middleware
app.use(express.json());
app.use(cors());






app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`listening on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
