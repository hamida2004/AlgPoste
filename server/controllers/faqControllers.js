const Faq = require('../models/faq');

// Get all FAQs
const getAllFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find(); 
        res.status(200).json({
            message: "FAQs retrieved successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while retrieving FAQs",
            error: error.message,
        });
    }
};

// Get FAQ by ID
const getFaqById = async (req, res) => {
    try {
        const { id } = req.params; 
        const faq = await Faq.findById(id); 

        if (!faq) {
            return res.status(404).json({
                message: "FAQ not found",
            });
        }

        res.status(200).json({
            message: "FAQ retrieved successfully",
            data: faq,
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while retrieving the FAQ",
            error: error.message,
        });
    }
};

module.exports = {
    getAllFaqs,
    getFaqById,
};

