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


