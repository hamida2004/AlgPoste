const mongoose = require("mongoose");

const WebinarSchema = new mongoose.Schema({
  author: String,
  time: Date,
  date: Date,
  content: String,
  link: String,
});

const Webinar =
  mongoose.models.Webinar || mongoose.model("Webinar", WebinarSchema);
module.exports = Webinar;
