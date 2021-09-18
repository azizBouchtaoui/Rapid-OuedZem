const mongoose = require('mongoose');

 const contactUsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String, 
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
 });

 const contactUs = module.exports = mongoose.model('ContactUs',contactUsSchema);