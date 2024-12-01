const mongoose = require('mongoose');

// Define the schema for FAQ
const faqSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
}, );


const Faq = mongoose.models.Faq || mongoose.model('Faq', faqSchema);
module.exports = Faq;
