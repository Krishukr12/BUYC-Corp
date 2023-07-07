// All imports
const { Router } = require("express");
const {
  registerUserController,
  loginUserController,
} = require("../controllers/authControllers");

const authRouter = Router();

//Register User
authRouter.post("/signup", registerUserController);

// Login User
authRouter.post("/login", loginUserController);

module.exports = authRouter;
