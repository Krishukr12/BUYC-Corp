// All imports
const express = require("express");
const cors = require("cors");
// Dotenv configuration
require("dotenv").config();

const app = express();

// Compulsory Middleware
app.use(express.json());
app.use(cors());



app.listen(process.env.PORT, () => {
  console.log("listening on port");
});
