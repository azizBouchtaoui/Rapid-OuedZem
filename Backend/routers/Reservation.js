const express = require('express');
const router = express.Router();
const Ville = require('../model/Villes')
const mongoose = require('mongoose');

 

router.get('/Villes',(req, res) =>{
    Ville.find({},(err, villes)=>{
        res.json(villes)
    })
} )

module.exports = router