const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
