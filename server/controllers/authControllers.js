// All imports
const UserModel = require("../models/User.models");
const bcrypt = require("bcrypt");
const createError = require("../utils/createError");
const jwt = require("jsonwebtoken");

// Controller : Register user
const registerUserController = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return next(createError(409, "User already exists"));
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return next(createError(500, "Internal Server Error"));
      }

      const newUser = new UserModel({
        email: email,
        password: hash,
        firstName: firstName,
        lastName: lastName,
      });

      await newUser.save();
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: newUser,
      });
    });
  } catch (error) {
    return next(createError(500, error.message));
  }
};

// Controller : Login user
const loginUserController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return next(createError(401, "Invalid credentials"));
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return next(createError(401, "Invalid credentials"));
      }

      const payload = { userId: user._id };
      const secretKey = process.env.JWT_SECRET;

      jwt.sign(payload, secretKey, { expiresIn: "1h" }, (err, token) => {
        if (err) {
          return next(createError(500, "Failed to generate JWT"));
        }

        const { _id, email, firstName, lastName } = user;
        res.status(200).json({
          success: true,
          message: "User authenticated successfully",
          user: { _id, email, firstName, lastName },
          token: token,
        });
      });
    });
  } catch (error) {
    return next(createError(500, error.message));
  }
};

module.exports = {
  registerUserController,
  loginUserController,
};
