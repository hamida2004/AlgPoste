const Webinar = require('../models').Webinar;

exports.getAllWebinars = async (req, res) => {
  try {
    const webinars = await Webinar.find();
    res.status(200).json(webinars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getWebinarById = async (req, res) => {
  try {
    const webinar = await Webinar.findById(req.params.id);
    if (!webinar) return res.status(404).json({ message: 'Webinar not found' });
    res.status(200).json(webinar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createWebinar = async (req, res) => {
  const webinar = new Webinar(req.body);
  try {
    const newWebinar = await webinar.save();
    res.status(201).json(newWebinar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateWebinar = async (req, res) => {
  try {
    const updatedWebinar = await Webinar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedWebinar) return res.status(404).json({ message: 'Webinar not found' });
    res.status(200).json(updatedWebinar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteWebinar = async (req, res) => {
  try {
    const deletedWebinar = await Webinar.findByIdAndDelete(req.params.id);
    if (!deletedWebinar) return res.status(404).json({ message: 'Webinar not found' });
    res.status(200).json(deletedWebinar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
