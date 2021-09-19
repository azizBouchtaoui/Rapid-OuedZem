const nodemailerr = require('nodemailer') 
const express = require('express');
const router = express.Router();
const contactUsModel= require('../model/Contactus');
 

 
router.post('/rapidOZ/ContactUs', async (req, res) => {
   
    try {
        const body = req.body

       delete body._id;
        const  contact = new contactUsModel(body);
       const  result = await contact.save()
        .then(()=> res.status(201).json({message:"Objet Enregistre!"}))
        .catch((error)=>res.status(400).json({error}));
        const html= '<h2> <u>  Contact utilisateur </u> </h2> <br><br> <p> Name : <b> ' + body.name + ' </b> <br>  Subject : <b>'  + body.subject + ' </b> <br> Email :  <b> ' + body.email + ' </b>  <br> Message : <b>' + body.message + ' </b> </p>';
        
        var transporter = nodemailerr.createTransport( {
            service: 'gmail',
            host: 'smtp.gmail.com',
            secure: false, // use SSL
            port: 25, // port for secure SMTP
            auth: {
                user: 'equitationmaroc@gmail.com',
                pass: 'equitationmaroc123456'
            }
          });
     
        const mailOptions = {
            from: 'equitationmaroc@gmail.com',
            to: 'rapideoz101@gmail.com',
            subject: body.subject,
            html:  html
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("error" +body);
                console.log(" smtp "+error)
            } else {
                 console.log('Email sent: ' + info.response);
            }
        });

        

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
});
 
module.exports = router