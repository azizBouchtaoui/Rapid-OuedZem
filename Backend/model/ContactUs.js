const mongoose = require('mongoose');

 const contactUsSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Subject: {
        type: String,
        required: true,
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