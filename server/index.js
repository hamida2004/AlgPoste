const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5500;
const DB_URI = process.env.DB_URI;

app.use(express.json());

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    
    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log('smth went wrng')
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  });

// Optional route to verify server status
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// console.log(PORT)