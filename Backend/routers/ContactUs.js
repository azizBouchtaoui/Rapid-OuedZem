const express = require('express');
const router = express.Router();
const contactUsModel= require('../model/ContactUs');


 
router.post('/rapidOZ/ContactUs', async (req, res) => {
   
    try {
        const body = req.body


        console.log("boooooooooooodddddddddddddoooooyyy"+JSON.stringify(body))
       
        var contact = new contactModel(body)
        var result = await contact.save()
      
        const html= '<h2> <u>  Contact utilisateur </u> </h2> <br><br> <p> Name : <b> ' + body.name + ' </b> <br>  Subject : <b>'  + body.subject + ' </b> <br> Email :  <b> ' + body.email + ' </b>  <br> Message : <b>' + body.message + ' </b> </p>';
        client.sendEmail({ ...body, html: html, subject: 'User Contact', email: body.email + ', azizboch996@gmail.com' })
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
});
 
module.exports = router