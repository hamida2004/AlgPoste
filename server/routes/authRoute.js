const router = require("express").Router();


const {
  loginUser,
  createUser,
  logout,
} = require("../controllers/authController");

// Register a new user
router
  .post("/register", createUser) // verifyAccess checks if the user has permission (role)
  .post("/login", loginUser) // Log in a user
  .get("/logout", logout); // Log out a user

module.exports = router;
