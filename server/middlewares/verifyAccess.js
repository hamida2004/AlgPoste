const jwt = require("jsonwebtoken");
const { User } = require("../models"); // Import User model using mongoose
require("dotenv").config();

const verifyAccess = () => {
  return async (req, res, next) => {
    const authHeaders = req.headers["authorization"];
    if (!authHeaders) return res.sendStatus(401); // No Authorization header

    const accessToken = authHeaders.split(" ")[1]; // Get the token from header
    if (accessToken) {
      jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_KEY, // Verify the JWT with the secret
        async (err, decoded) => {
          if (err) {
            return res.sendStatus(401); // Invalid or expired token
          } else {
            try {
              // Check the user in the database based on the email in the JWT
              const user = await User.findOne({ email: decoded.user });
              if (!user) {
                return res.sendStatus(404); // User not found
              }
              req.user = user; // Attach user data to the request
              next(); // Proceed to the next middleware or route handler
            } catch (error) {
              console.error("Error verifying JWT:", error);
              return res.sendStatus(500); // Server error
            }
          }
        }
      );
    } else {
      res.sendStatus(403); // Forbidden if no token is provided
    }
  };
};

module.exports = { verifyAccess };
