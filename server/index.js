// Dotenv configuration
require("dotenv").config();

// All imports
const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const authRouter = require("./routes/auth.routes");

const app = express();

// Compulsory Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h3>Hi Krishu!</h3>");
});

// All Routes
app.use("/user", authRouter);

//  Middleware to handle error
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`listening on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
