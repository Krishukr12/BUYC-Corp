const registerUserController = (req, res, next) => {
  res.send("Welcome to register page");
};

const loginUserController = (req, res, next) => {
  res.send("Welcome to login page");
};

module.exports = {
  registerUserController,
  loginUserController,
};
