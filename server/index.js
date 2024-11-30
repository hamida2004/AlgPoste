const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5500;

const atmRoutes = require("./routes/atmRoutes");
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const tacheCollaborateRoutes = require('./routes/tacheCollaborate');
const ideaRoutes = require('./routes/idea');
const contractRoutes = require('./routes/contract');
const tacheUserRoutes = require('./routes/tacheUser');
const webinarRoutes = require('./routes/webinar');
const actualityRoutes = require('./routes/actuality');
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.error("MongoDB connection error:", error.message));

const initialize = require("./routes/initilaize");
app.use("/init", initialize);
app.use("/api/atms", atmRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/actualities', actualityRoutes);
app.use('/api/webinars', webinarRoutes);
app.use('/api/ideas', ideaRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/tache-users', tacheUserRoutes);
app.use('/api/tache-collaborates', tacheCollaborateRoutes);
