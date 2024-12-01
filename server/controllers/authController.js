const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config();



const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const accessToken = jwt.sign(
        { user: user.email },
        process.env.ACCESS_TOKEN_KEY,
        { expiresIn: "10m" }
      );
      const refreshToken = jwt.sign(
        { user: user.email },
        process.env.REFRESH_TOKEN_KEY,
        { expiresIn: "30d" }
      );

      // Update user with refresh token
      user.token = refreshToken;
      await user.save();

      // Set the refresh token in the cookie
      res.cookie("token", refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        path: "/",
        domain: "localhost",
      });

      return res.json({ accessToken });
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.token) {
      return res.status(204).json({ msg: "Logged out successfully" });
    }

    const foundUser = await User.findOne({ token: cookies.token });
    if (!foundUser) {
      res.clearCookie("token", { httpOnly: true });
      return res.status(204).json({ msg: "Logged out successfully" });
    }

    // Clear token from user and clear cookie
    foundUser.token = "";
    await foundUser.save();
    res.clearCookie("token", { httpOnly: true });

    return res.status(200).json({ msg: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, loginUser, logout };
