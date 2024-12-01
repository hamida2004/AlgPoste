const Actuality = require('../models').Actuality;
const User = require('../models').User;

exports.getAllActualities = async (req, res) => {
  try {
    const actualities = await Actuality.find();
    res.status(200).json(actualities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getActualityById = async (req, res) => {
  try {
    const actuality = await Actuality.findById(req.params.id);
    if (!actuality) 
      return (
         res.status(404).json({ message: 'Actuality not found' })
      )
    res.status(200).json(actuality);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.setActualityAsSave = async (req, res) => {
  const { user_id, actuality_id } = req.body; 

  try {
    const actuality = await Actuality.findById(actuality_id);
    if (!actuality) {
      return res.status(404).json({ message: 'Actuality not found' });
    }

    // Update the user's saved_post array
    const user = await User.findByIdAndUpdate(
      user_id,
      { $addToSet: { saved_post: actuality_id } }, 
      { new: true } 
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    return res.status(200).json({ message: 'Actuality saved successfully', user });
  } catch (err) {

    return res.status(500).json({ message: 'An error occurred', error: err.message });
  }
};


exports.setActualityAsLiked = async (req, res) => {
  const { user_id, actuality_id } = req.body; 

  try {
    const actuality = await Actuality.findById(actuality_id);
    if (!actuality) {
      return res.status(404).json({ message: 'Actuality not found' });
    }

    // Update the user's saved_post array
    const user = await User.findByIdAndUpdate(
      user_id,
      { $addToSet: { liked_post : actuality_id } }, 
      { new: true } 
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    return res.status(200).json({ message: 'Actuality saved successfully', user });
  } catch (err) {
    
    return res.status(500).json({ message: 'An error occurred', error: err.message });
  }
};


