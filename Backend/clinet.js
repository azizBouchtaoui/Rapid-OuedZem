const fetch = require("node-fetch")
const nodemailer = require('nodemailer')

module.exports = {
sendEmail: async function (body) {

    const emailConfig = config.emailClient

    const transporter = nodemailer.createTransport({
        host: emailConfig.host,
        port: 465,
        secure: true,
        auth: emailConfig.auth
    });

    var mailOptions = {
        from: '"Sri Lanka Railways"' + emailConfig.email,
        to: body.email,
        subject: body.subject,
        html: body.html
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(body);
            console.log(error)
        } else {
            console.log(body);
            console.log('Email sent: ' + info.response);
        }
    });
},

 
}
 