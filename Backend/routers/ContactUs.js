const nodemailerr = require('nodemailer')
const express = require('express');
const router = express.Router();
const contactUsModel= require('../model/Contactus');
var client = require("../client");

 
router.post('/rapidOZ/ContactUs', async (req, res) => {
   
    try {
        const body = req.body


        console.log("boooooooooooodddddddddddddoooooyyy"+JSON.stringify(body))
       
        const  contact = new contactUsModel(body);
        console.log(" resullltaaat "+contact);
       
        const html= '<h2> <u>  Contact utilisateur </u> </h2> <br><br> <p> Name : <b> ' + body.name + ' </b> <br>  Subject : <b>'  + body.subject + ' </b> <br> Email :  <b> ' + body.email + ' </b>  <br> Message : <b>' + body.message + ' </b> </p>';
        
        




        const transporter = nodemailerr.createTransport({
            service:'Gmail',
            secure: false, // use SSL
            port: 25,
            auth: {
                user: 'equitationmaroc@gmail.com',
                pass: 'equitationmaroc123456'
            },
            tls: {
                rejectUnauthorized: false
            }
        })
     
        const mailOptions = {
            from: 'equitationmaroc@gmail.com',
            to: 'azizboch996@gmail.com',
            subject: body.subject,
            html:  html
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(body);
                console.log(" smtp "+error)
            } else {
                console.log(body);
                console.log('Email sent: ' + info.response);
            }
        });
  















          consol.log(res.send("success"));


















        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
});
 
module.exports = router